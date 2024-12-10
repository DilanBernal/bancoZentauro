import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { SharedService } from '../../../services/shared.service';

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
  constructor(private router: Router, private api: ApiService, public shared: SharedService) {
    this.estaLogeado = shared.estaLogeado();
  }
  Login() {
    this.router.navigate(["login"]);
    this.showHeader = false;
  }

  ngOnInit() {
    if (this.estaLogeado == true) {
      var temp = (this.shared.nombreUsuario).split(" ",1)
      this.nombreUsuario = temp[0]
    }
  }

  Logout() {
    sessionStorage.removeItem('user')
    localStorage.removeItem('user')
    this.router.navigate(["home"])
    this.estaLogeado = this.shared.estaLogeado();
  }

  creacionProductoBtn() {
    this.router.navigate(['admin/creacion-productos'])
  }

  Signin() {
    console.log("removido" + sessionStorage.getItem('user'))
    this.router.navigate(["signin"]);
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    this.menuAbierto = false; // Cerrar el menú al hacer clic en cualquier otra parte
  }
  toggleDropdown(): void {
    event?.stopPropagation()
    this.menuAbierto = !this.menuAbierto;
  }
}
