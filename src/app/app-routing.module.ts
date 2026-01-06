import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Content/home/home.component';
import { ProductsComponent } from './Content/products/products.component';
import { ServicesComponent } from './Content/servicesBanco/services.component';
import { ProductInfoComponent } from './Content/products/product-info/product-info.component';
import { CreacionProductosComponent } from './pages/Admin/productos/creacion-productos/creacion-productos.component';
import { ListaProductosComponent } from './pages/Admin/productos/lista-productos/lista-productos.component';
import { ListaSolicitudComponent } from './pages/Admin/solicitudes/lista-solicitud/lista.component';
import { TableroDeControlComponent } from './pages/Admin/tablero-de-control/tablero-de-control.component';
import { BackupComponent } from './pages/Usuario/backup/backup.component';
import { FormSolicitudComponent } from './pages/Usuario/form-solicitud/form-solicitud.component';
import { ListaProductosCLComponent } from './pages/Usuario/lista-productos-cl/lista-productos-cl.component';
import { LoginComponent } from './pages/Usuario/login/login.component';
import { SigninComponent } from './pages/Usuario/signin/signin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductInfoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'backup', component: BackupComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'admin/creacion-productos', component: CreacionProductosComponent },
  { path: 'product/:id/form-solicitud', component: FormSolicitudComponent },
  { path: 'admin/lista-productos', component: ListaProductosComponent },
  { path: 'lista-productos-cli', component: ListaProductosCLComponent },
  { path: 'lista-Solicitudes', component: ListaSolicitudComponent },
  { path: 'admin/tablero-de-control', component: TableroDeControlComponent },
  { path: 'servicesBanco', component: ServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

