import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.css'
})
export class EstudiantesComponent {

  constructor(private router:Router){}

  solicitudTarjetaEstudiantes(){
    this.router.navigate(["form-solicitud"]);
  }

}
