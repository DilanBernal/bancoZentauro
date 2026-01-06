import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductInfoComponent } from './products/product-info/product-info.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { ServicesComponent } from './servicesBanco/services.component';
import { HttpLoaderFactory } from '../../app.module';

@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    ProductInfoComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: []
})
export class ContentModule { }
