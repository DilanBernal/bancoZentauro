import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CompleteService } from './complete.service';

@Component({
  selector: 'complete',
  templateUrl: './complete.component.html',
  styleUrl: './complete.component.css'
})
export class CompleteComponent {
  frase1:string = ''
  frase2:string = ''

  respuesta:boolean = false
  activo: boolean = false
  salida: boolean = false

  private subs: Subscription = new Subscription()

  constructor(public service: CompleteService){}

  ngOnInit(): void {
    this.subs.add(
      this.service.getLoaderStatus().subscribe((status) => {
        this.activo = status;
      })
    );

    this.subs.add(
      this.service.getSalidaStatus().subscribe((status) => {
        this.salida = status;
      })
    );

    this.subs.add(
      this.service.getFrase1().subscribe((response) => {
        this.frase1 = response
      })
    )
    this.subs.add(
      this.service.getFrase2().subscribe((response) => {
        this.frase2 = response
      })
    )
    this.subs.add(
      this.service.getStatusResponse().subscribe((status) => {
        this.respuesta = status
      })
    );
  }

}
