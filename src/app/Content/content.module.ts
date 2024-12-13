import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './header/user/user.component';
import { ProductInfoComponent } from './products/product-info/product-info.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from '../app.module';
import { ServicesComponent } from './servicesBanco/services.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    UserComponent,
    FooterComponent,
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
  exports: [
    HeaderComponent,
    UserComponent,
    FooterComponent,
  ]
})
export class ContentModule { }
