import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  
  selectedItem: string = '';
  
  constructor(private router: Router, public item: SharedService) {}

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

  Login() {
    this.router.navigate(["login"]);
  }

  Signin() {
    this.router.navigate(["signin"]);
  }

  ngOnInit() { 
    console.log(this.router.url);
    const ruta = this.router.url.split("/", 1);
    console.log("ruta" + ruta[0]);
    this.item.setSelectedItem(ruta[1]);

    // Filtrar los eventos para solo obtener NavigationEnd
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => { 
        this.onPageChange(event);
      });
  }

  // Manejo del cambio de página
  onPageChange(event: NavigationEnd) { 
    console.log('La página ha cambiado:', event.urlAfterRedirects);
    this.item.setSelectedItem(this.router.url.split("/")[1]);
    console.log(this.item.getSelectedItem());
    console.log(this.router.url.split("/")[1] + "perro malparido");
  };
    
}
