import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreacionProductosComponent } from './productos/creacion-productos/creacion-productos.component';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';
import { RevisarProductosComponent } from './productos/revisar-productos/revisar-productos.component';
import { SolicitudDeEntregaComponent } from './solicitudes/solicitud-de-entrega/solicitud-de-entrega.component';
import { ListaSolicitudComponent } from './solicitudes/lista-solicitud/lista.component';
import { TableroDeControlComponent } from './tablero-de-control/tablero-de-control.component';



@NgModule({
  declarations: [
    CreacionProductosComponent,
    ListaProductosComponent,
    RevisarProductosComponent,
    SolicitudDeEntregaComponent,
    ListaSolicitudComponent,
    TableroDeControlComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
