import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Content/home/home.component';
import { ProductsComponent } from './Content/products/products.component';
import { LoginComponent } from './Usuario/login/login.component';
import { SigninComponent } from './Usuario/signin/signin.component';
import { ServicesComponent } from './Content/servicesBanco/services.component';
import { BackupComponent } from './Usuario/backup/backup.component';
import { FormSolicitudComponent } from './Usuario/form-solicitud/form-solicitud.component';
import { CreacionProductosComponent } from './Admin/productos/creacion-productos/creacion-productos.component';
import { ListaProductosComponent } from './Admin/productos/lista-productos/lista-productos.component';
import { ListaProductosCLComponent } from './Usuario/lista-productos-cl/lista-productos-cl.component';

import { TableroDeControlComponent } from './Admin/tablero-de-control/tablero-de-control.component';
import { ProductInfoComponent } from './Content/products/product-info/product-info.component';
import { ListaSolicitudComponent } from './Admin/solicitudes/lista-solicitud/lista.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductInfoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'backup', component: BackupComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'creacion-productos', component: CreacionProductosComponent },
  { path: 'form-solicitud', component: FormSolicitudComponent },
  { path: 'lista-productos', component: ListaProductosComponent },
  { path: 'lista-productos-cli', component: ListaProductosCLComponent },
  { path: 'lista-Solicitudes', component: ListaSolicitudComponent },
  { path: 'tablero-de-control', component: TableroDeControlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

