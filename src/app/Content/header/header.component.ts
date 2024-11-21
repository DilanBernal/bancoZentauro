import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  
  showHeader: boolean = true;

  constructor(private router:Router){}

  Home(){
    this.router.navigate(["home"]);
  }

  Products(){
    this.router.navigate(["products"]);
  }

  ProductInfo(){
    this.router.navigate(["product-info"]);
  }

  Services(){
    this.router.navigate(["creacion-productos"]);
  }

  Login(){
    this.router.navigate(["login"]);
    this.showHeader = false;
  }

  Signin(){
    this.router.navigate(["signin"]);
  }

}
