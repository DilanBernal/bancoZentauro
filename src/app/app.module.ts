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
import { UserComponent } from './Content/header/user/user.component';
import { EstudiantesComponent } from './Content/product-info/estudiantes/estudiantes.component';
import { PlusComponent } from './Content/product-info/plus/plus.component';
import { PremiumComponent } from './Content/product-info/premium/premium.component';
import { FormSolicitudComponent } from './Content/form-solicitud/form-solicitud.component';
import { CreacionProductosComponent } from './Admin/productos/creacion-productos/creacion-productos.component';
import { RevisarProductosComponent } from './Admin/productos/revisar-productos/revisar-productos.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FooterComponent } from './Content/footer/footer.component';
import { ListaComponent } from './Admin/solicitudes/lista/lista.component';
import { SolicitudDeEntregaComponent } from './Admin/solicitudes/solicitud-de-entrega/solicitud-de-entrega.component';
import { TableroDeControlComponent } from './Admin/tablero-de-control/tablero-de-control.component';
import { AdminComponent } from './Content/header/admin/admin.component';
import { ListaProductosCLComponent } from './Usuario/lista-productos-cl/lista-productos-cl.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ListaProductosComponent } from './Admin/productos/lista-productos/lista-productos.component';

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
    UserComponent,
    EstudiantesComponent,
    PlusComponent,
    PremiumComponent,
    FormSolicitudComponent,
    CreacionProductosComponent,
    RevisarProductosComponent,
    FooterComponent,
    ListaComponent,
    SolicitudDeEntregaComponent,
    TableroDeControlComponent,
    AdminComponent,
    ListaProductosCLComponent,
    ListaProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
