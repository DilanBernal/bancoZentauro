import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';
import { SharedService } from '../../../shared.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  showHeader: boolean = true;

  estaLogeado:boolean = false;
  constructor(private router:Router, private api:ApiService, private shared:SharedService){
    this.estaLogeado = shared.estaLogeado();
  }
  Login(){
    this.router.navigate(["login"]);
    this.showHeader = false;
  }

  Signin(){
    this.router.navigate(["signin"]);
  }
}
