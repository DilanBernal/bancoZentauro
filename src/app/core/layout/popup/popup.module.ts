import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteComponent } from './complete/complete.component';
import { ErrorComponent } from './error/error.component';
import { LoaderComponent } from './loader/loader.component';
import { map } from 'rxjs';



@NgModule({
  declarations: [
    CompleteComponent,
    ErrorComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    CompleteComponent,
    ErrorComponent,
  ]
})
export class PopupModule { }
