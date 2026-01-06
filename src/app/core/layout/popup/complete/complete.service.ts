import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompleteService {

  private activo = new BehaviorSubject<boolean>(false)
  private salida = new BehaviorSubject<boolean>(false)
  private frase1 = new BehaviorSubject<string>('')
  private frase2 = new BehaviorSubject<string>('')
  private resultado = new BehaviorSubject<boolean>(false)


  constructor(private route:Router) { }

  activarLoader(f1: string, f2: string, status: boolean) {
    
    this.frase1.next(f1)
    this.frase2.next(f2)
    this.resultado.next(status)
    this.salida.next(false)
    setTimeout(() => {
      this.activo.next(true)
    })
    setTimeout(() => {
      if(status == true){
        this.route.navigate(["home"])
      }
      this.cerrarLoader()
    }, 3500)
  }

  cerrarLoader() {
    setTimeout(() => {
      this.salida.next(true)
      setTimeout(() => {
        this.activo.next(false)
      }, 950)
    }, 1600)
  }

  getLoaderStatus() {
    return this.activo.asObservable()
  }

  setLoaderStatus(status: boolean) {
    this.activo.next(status)
  }

  getSalidaStatus() {
    return this.salida.asObservable()
  }

  setSalidaStatus(status: boolean) {
    this.salida.next(status)
  }

  getFrase1() {
    return this.frase1.asObservable()
  }

  getFrase2() {
    return this.frase2.asObservable()
  }

  getStatusResponse() {
    return this.resultado.asObservable()
  }
}
