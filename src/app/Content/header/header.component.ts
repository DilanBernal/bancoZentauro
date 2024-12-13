import { Component, HostListener } from '@angular/core';
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
  
  isDropdownOpen = false;

  constructor(
    private router: Router, 
    public item: SharedService, 
    public translate: TranslateService  // Inyectar el servicio de traducción
  ) { }

  // Método para cambiar el idioma
  switchLanguage(language: string) {
    this.translate.use(language); 
    localStorage.setItem('language', this.translate.currentLang)
    console.log(this.translate.currentLang)
  }


  toggleDropdown() {
    event?.stopPropagation()
    this.isDropdownOpen = !this.isDropdownOpen; 
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
    this.router.navigate(["services"]);
    this.selectedItem = "services";
  }

  Login() {
    this.router.navigate(["login"]);
  }

  Signin() {
    this.router.navigate(["signin"]);
  }

  // Manejo de la selección de la página
  ngOnInit() {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage != null) {
      this.translate.use(savedLanguage);  // Usamos el idioma guardado en localStorage
    } else {
      // Si no hay idioma guardado, establecemos un idioma por defecto
      this.translate.setDefaultLang('es');
      this.translate.use('es');
    }
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

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    this.isDropdownOpen = false; // Cerrar el menú al hacer clic en cualquier otra parte
  }

  onPageChange(event: NavigationEnd) {
    this.item.setSelectedItem(this.router.url.split("/")[1]);
  }
}
