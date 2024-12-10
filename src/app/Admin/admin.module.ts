import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreacionProductosComponent } from './productos/creacion-productos/creacion-productos.component';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';
import { RevisarProductosComponent } from './productos/revisar-productos/revisar-productos.component';
import { SolicitudDeEntregaComponent } from './solicitudes/solicitud-de-entrega/solicitud-de-entrega.component';
import { ListaSolicitudComponent } from './solicitudes/lista-solicitud/lista.component';
import { TableroDeControlComponent } from './tablero-de-control/tablero-de-control.component';
import { PopupModule } from '../Content/popup/popup.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';



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
    CommonModule,
    PopupModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class AdminModule { }
