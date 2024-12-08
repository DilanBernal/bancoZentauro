import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private activo = new BehaviorSubject<boolean>(false)
  private salida = new BehaviorSubject<boolean>(false)

  constructor() { }

  activarLoader() {
    console.log('xd')
    this.activo.next(true)
  }

  cerrarLoader() {
    setTimeout(() => {
      this.salida.next(true)
      setTimeout(() => {
        this.activo.next(false)
      }, 950)
    }, 2600)
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
}

