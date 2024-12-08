import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { BackupComponent } from './backup/backup.component';
import { PopupModule } from '../Content/popup/popup.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormSolicitudComponent } from './form-solicitud/form-solicitud.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    BackupComponent,
    FormSolicitudComponent
  ],
  imports: [
    PopupModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class UsuarioModule { }
