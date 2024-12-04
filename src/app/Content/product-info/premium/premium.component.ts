import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css']
})
export class PremiumComponent {

  constructor(private router:Router){}

  solicitudTarjetaEstudiantes(){
    this.router.navigate(["form-solicitud"]);
  }
}
