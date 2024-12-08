import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Content/home/home.component';
import { LoginComponent } from './Usuario/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './Usuario/signin/signin.component';
import { BackupComponent } from './Usuario/backup/backup.component';
import { HeaderComponent } from './Content/header/header.component';
import { FooterComponent } from './Content/footer/footer.component';
import { UserComponent } from './Content/header/user/user.component';
import { ProductsComponent } from './Content/products/products.component';
import { ListaComponent } from './Admin/solicitudes/lista/lista.component';
import { FormSolicitudComponent } from './Content/form-solicitud/form-solicitud.component';
import { TableroDeControlComponent } from './Admin/tablero-de-control/tablero-de-control.component';
import { RevisarProductosComponent } from './Admin/productos/revisar-productos/revisar-productos.component';
import { CreacionProductosComponent } from './Admin/productos/creacion-productos/creacion-productos.component';
import { SolicitudDeEntregaComponent } from './Admin/solicitudes/solicitud-de-entrega/solicitud-de-entrega.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    HomeComponent,
    ProductsComponent,
    BackupComponent,
    HeaderComponent,
    UserComponent,
    FormSolicitudComponent,
    CreacionProductosComponent,
    RevisarProductosComponent,
    FooterComponent,
    ListaComponent,
    SolicitudDeEntregaComponent,
    TableroDeControlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
