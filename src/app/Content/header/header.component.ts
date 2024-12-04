import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SharedService } from '../../shared.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  selectedItem:string = '';
  
  constructor(private router:Router, public item:SharedService){
  }


  Home(){
    this.router.navigate(["home"]);
    this.item.setSelectedItem('');
  }

  Products(){
    this.router.navigate(["products"]);
    this.item.setSelectedItem("products");
  }

  ProductInfo(){
    this.router.navigate(["product-info"]);
  }

  Services(){
    this.router.navigate(["creacion-productos"]);
    this.selectedItem = "services";
  }

  Login(){
    this.router.navigate(["login"]);
  }

  Signin(){
    this.router.navigate(["signin"]);
  }

  ngOnInit() { 
    console.log(this.router.url)
    const ruta = this.router.url.split("/",1);
    this.item.setSelectedItem(ruta[1]);
    this.router.events
     .pipe(
       filter(event => event instanceof NavigationEnd) 
      )
       .subscribe((event: NavigationEnd) => { 
        this.onPageChange(event);
       }); } onPageChange(event: NavigationEnd) { 
        this.item.setSelectedItem(this.router.url.split("/")[1])
      };
    
}
