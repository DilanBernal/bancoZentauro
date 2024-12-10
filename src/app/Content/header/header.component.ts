import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { filter } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';  // Importar el servicio de traducción

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  selectedItem: string = '';
  
  constructor(
    private router: Router, 
    public item: SharedService, 
    private translate: TranslateService  // Inyectar el servicio de traducción
  ) { }

  // Método para cambiar el idioma
  switchLanguage(language: string) {
    this.translate.use(language);  // Cambia el idioma
  }

  // Funciones de navegación
  Home() {
    this.router.navigate(["home"]);
    this.item.setSelectedItem('');
  }

  Products() {
    this.router.navigate(["products"]);
    this.item.setSelectedItem("products");
  }

  ProductInfo() {
    this.router.navigate(["product-info"]);
  }

  Services() {
    this.router.navigate(["creacion-productos"]);
    this.selectedItem = "services";
  }

  listaCliente() {
    this.router.navigate(["lista-productos-cli"]);
    this.selectedItem = "lProductosCliente";
  }

  tableroDeControl(){
    this.router.navigate(["tablero-de-control"]);
    this.selectedItem = "lProductosCliente";
  }
  listaSolicitudes() {
    this.router.navigate(["lista-Solicitudes"]);
    this.selectedItem = "lProductosCliente";
  }
  listaProducts() {
    this.router.navigate(["lista-productos"]);
    this.selectedItem = "lProductos";
  }

  Login() {
    this.router.navigate(["login"]);
  }

  Signin() {
    this.router.navigate(["signin"]);
  }

  // Manejo de la selección de la página
  ngOnInit() {
    const ruta = this.router.url.split("/", 1);
    this.item.setSelectedItem(ruta[1]);
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.onPageChange(event);
      });
  }

  onPageChange(event: NavigationEnd) {
    this.item.setSelectedItem(this.router.url.split("/")[1]);
  }
}
