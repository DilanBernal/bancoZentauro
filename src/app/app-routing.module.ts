import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Content/home/home.component';
import { ProductInfoComponent } from './Content/product-info/product-info.component';
import { ProductsComponent } from './Content/products/products.component';
import { LoginComponent } from './Usuario/login/login.component';
import { SigninComponent } from './Usuario/signin/signin.component';
import { ServicesComponent } from './Content/services/services.component';
import { BackupComponent } from './Usuario/backup/backup.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'product-info', component:ProductInfoComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signin', component:SigninComponent},
  {path: 'backup', component:BackupComponent},
  {path: 'services', component:ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

