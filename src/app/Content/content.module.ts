import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './header/user/user.component';
import { FormSolicitudComponent } from './form-solicitud/form-solicitud.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    UserComponent,
    FormSolicitudComponent,
    FooterComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ContentModule { }
