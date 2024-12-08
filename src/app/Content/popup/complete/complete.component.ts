import { Component } from '@angular/core';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrl: './complete.component.css'
})
export class CompleteComponent {
  

  frase1:string = ''
  frase2:string = ''

  correcto:boolean = false
  incorrecto:boolean = false
  activo: boolean = false
  salida: boolean = false

  activarLoader(frase1:string, frase2:string, svg:boolean){
    this.frase1 = frase1
    this.frase2 = frase2
    setTimeout(() => {
      if(svg == true){
        this.correcto = true
        this.incorrecto = false
      }else{
        this.correcto = false
        this.incorrecto = true
      }
      this.activo = true;
    }, 500)
  }

  cerrarLoader(){
    setTimeout(() => {
      console.log(2)
      this.activo = false; // Desactiva la carga al completar
    }, 1000)
  }


}
