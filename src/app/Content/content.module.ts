import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './header/user/user.component';
import { LoginComponent } from '../Usuario/login/login.component';
import { ProductInfoComponent } from './products/product-info/product-info.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    UserComponent,
    FooterComponent,
    ProductsComponent,
    ProductInfoComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    UserComponent,
    FooterComponent
  ]
})
export class ContentModule { }
