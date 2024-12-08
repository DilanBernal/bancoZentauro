import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Content/home/home.component';
import { ProductsComponent } from './Content/products/products.component';
import { LoginComponent } from './Usuario/login/login.component';
import { SigninComponent } from './Usuario/signin/signin.component';
import { ServicesComponent } from './Content/services/services.component';
import { BackupComponent } from './Usuario/backup/backup.component';
import { FormSolicitudComponent } from './Content/form-solicitud/form-solicitud.component';
import { CreacionProductosComponent } from './Admin/productos/creacion-productos/creacion-productos.component';
import { ListaProductosComponent } from './Admin/productos/lista-productos/lista-productos.component';
import { ProductDetailComponent } from './Content/products/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products',
    children: [
      {
        path: '',
        component: ProductsComponent
      },
      {
        path: 'product-detail/:productName',
        component: ProductDetailComponent
      }]},
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'backup', component: BackupComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'creacion-productos', component: CreacionProductosComponent },
  { path: 'form-solicitud', component: FormSolicitudComponent },
  { path: 'lista-productos', component: ListaProductosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

