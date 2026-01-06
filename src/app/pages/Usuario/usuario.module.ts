import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { BackupComponent } from './backup/backup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormSolicitudComponent } from './form-solicitud/form-solicitud.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { ListaProductosCLComponent } from './lista-productos-cl/lista-productos-cl.component';
import { AppRoutingModule } from '../../app-routing.module';
import { HttpLoaderFactory } from '../../app.module';
import { PopupModule } from '../../Content/popup/popup.module';



@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    BackupComponent,
    FormSolicitudComponent,
    ListaProductosCLComponent
  ],
  imports: [
    PopupModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class UsuarioModule { }
