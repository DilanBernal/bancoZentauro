import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SharedService } from './shared.service';
;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bancoZentauro';
  header:boolean = true;
  constructor(private router:Router, private sharedService:SharedService){
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        const excludesRoutes =['/login', '/signin'];
        this.header = !excludesRoutes.includes(event.url);
      }
    })
  }




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
    this.router.navigate(["services"]);
  }

  Login(){
    this.router.navigate(["login"]);
  }

  Signin(){
    this.router.navigate(["signin"]);
  }
}