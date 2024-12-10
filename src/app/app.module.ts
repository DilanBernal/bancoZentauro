import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AdminModule } from './Admin/admin.module';
import { ApiService } from './services/api.service';
import { ContentModule } from './Content/content.module';
import { PopupModule } from './Content/popup/popup.module';
import { UsuarioModule } from './Usuario/usuario.module';
import { ListaProductosCLComponent } from './Usuario/lista-productos-cl/lista-productos-cl.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ListaProductosComponent } from './Admin/productos/lista-productos/lista-productos.component';
import { ServicesComponent } from './Content/servicesBanco/services.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    ContentModule,
    UsuarioModule,
    PopupModule,
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
