import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { BackupComponent } from './backup/backup.component';



@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    BackupComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsuarioModule { }
