import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Usuario/login/login.component';
import { SigninComponent } from './Usuario/signin/signin.component';
import { HomeComponent } from './Content/home/home.component';
import { ProductsComponent } from './Content/products/products.component';
import { ProductInfoComponent } from './Content/product-info/product-info.component';
import { ServicesComponent } from './Content/services/services.component';
import { FormsModule } from '@angular/forms';
import { BackupComponent } from './Usuario/backup/backup.component';
import { HeaderComponent } from './Content/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    HomeComponent,
    ProductsComponent,
    ProductInfoComponent,
    ServicesComponent,
    BackupComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
