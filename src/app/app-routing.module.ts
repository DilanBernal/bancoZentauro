import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Content/home/home.component';
import { ProductInfoComponent } from './Content/product-info/product-info.component';
import { ProductsComponent } from './Content/products/products.component';
import { LoginComponent } from './Usuario/login/login.component';
import { SigninComponent } from './Usuario/signin/signin.component';
import { ServicesComponent } from './Content/services/services.component';
import { BackupComponent } from './Usuario/backup/backup.component';
import { EstudiantesComponent } from './Content/product-info/estudiantes/estudiantes.component';
import { PlusComponent } from './Content/product-info/plus/plus.component';
import { PremiumComponent } from './Content/product-info/premium/premium.component';
import { FormSolicitudComponent } from './Content/form-solicitud/form-solicitud.component';
import { CreacionProductosComponent } from './Admin/productos/creacion-productos/creacion-productos.component';
import { ListaProductosComponent } from './Admin/productos/lista-productos/lista-productos.component';
import { ListaProductosCLComponent } from './Usuario/lista-productos-cl/lista-productos-cl.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'product-info', component:ProductInfoComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signin', component:SigninComponent},
  {path: 'backup', component:BackupComponent},
  {path: 'services', component:ServicesComponent},
  {path: 'estudiantes', component:EstudiantesComponent},
  {path: 'plus', component:PlusComponent},
  {path: 'premium', component:PremiumComponent},
  {path: 'creacion-productos', component:CreacionProductosComponent},
  {path: 'form-solicitud', component:FormSolicitudComponent},
  {path: 'lista-productos', component:ListaProductosComponent},
  {path: 'lista-productos-cli', component: ListaProductosCLComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

