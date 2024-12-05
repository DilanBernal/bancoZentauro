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
  menuAbierto: boolean = false;
  estaLogeado: boolean = false;

  nombreUsuario: string = '';
  constructor(private router: Router, private api: ApiService, private shared: SharedService) {
    this.estaLogeado = shared.estaLogeado();
  }
  Login() {
    this.router.navigate(["login"]);
    this.showHeader = false;
  }

  ngOnInit(){
    if(this.estaLogeado ==true ){
      this.nombreUsuario = this.shared.nombreUsuario
    }
  }

  Logout(){
    localStorage.removeItem('user')
    console.log("removido")
    this.estaLogeado = this.shared.estaLogeado();
  }

  Signin() {
    this.router.navigate(["signin"]);
  }
  toggleDropdown(): void { this.menuAbierto = !this.menuAbierto; }
}
