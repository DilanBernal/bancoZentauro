import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Usuario/login/login.component';
import { SigninComponent } from './Usuario/signin/signin.component';
import { HomeComponent } from './Content/home/home.component';
import { ProductsComponent } from './Content/products/products.component';
import { ServicesComponent } from './Content/servicesBanco/services.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackupComponent } from './Usuario/backup/backup.component';
import { HeaderComponent } from './Content/header/header.component';
import { UserComponent } from './Content/header/user/user.component';
import { FormSolicitudComponent } from './Content/form-solicitud/form-solicitud.component';
import { CreacionProductosComponent } from './Admin/productos/creacion-productos/creacion-productos.component';
import { RevisarProductosComponent } from './Admin/productos/revisar-productos/revisar-productos.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './Content/footer/footer.component';
import { ListaComponent } from './Admin/solicitudes/lista/lista.component';
import { SolicitudDeEntregaComponent } from './Admin/solicitudes/solicitud-de-entrega/solicitud-de-entrega.component';
import { TableroDeControlComponent } from './Admin/tablero-de-control/tablero-de-control.component';
import { AdminComponent } from './Content/header/admin/admin.component';
import { LoaderComponent } from './Content/popup/loader/loader.component';
import { ErrorComponent } from './Content/popup/error/error.component';
import { CompleteComponent } from './Content/popup/complete/complete.component';
import { ListaProductosComponent } from './Admin/productos/lista-productos/lista-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    HomeComponent,
    ProductsComponent,
    ServicesComponent,
    BackupComponent,
    ProductsComponent,
    HeaderComponent,
    UserComponent,
    FormSolicitudComponent,
    CreacionProductosComponent,
    RevisarProductosComponent,
    FooterComponent,
    ListaComponent,
    ListaProductosComponent,
    SolicitudDeEntregaComponent,
    TableroDeControlComponent,
    AdminComponent,
    LoaderComponent,
    ErrorComponent,
    CompleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
