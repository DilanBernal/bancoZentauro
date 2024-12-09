import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteComponent } from './complete/complete.component';
import { ErrorComponent } from './error/error.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    CompleteComponent,
    ErrorComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PopupModule { }
