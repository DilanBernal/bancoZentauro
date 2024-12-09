import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './Admin/admin.module';
import { ApiService } from './services/api.service';
import { ContentModule } from './Content/content.module';
import { PopupModule } from './Content/popup/popup.module';
import { UsuarioModule } from './Usuario/usuario.module';

@NgModule({
  declarations: [
    AppComponent
    // ServicesComponent,
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
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
