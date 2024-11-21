import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrl: './plus.component.css'
})
export class PlusComponent {

  constructor(private router:Router){}

  solicitudTarjetaEstudiantes(){
    this.router.navigate(["form-solicitud"]);
  }
}
