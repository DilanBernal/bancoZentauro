import { Component } from '@angular/core';

@Component({
  selector: 'lista-solicitudes-admin',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaSolicitudComponent {

  solicitudes= [
    {
      "idSolicitud": 3,
      "estadoSolicitud": "aceptada",
      "producto": {
        "productoId": 44,
        "productoNombre": "Tarjeta Ruby"
      },
      "usuario": {
        "usuarioId": 37,
        "usuarioNombre": "Pepito Perez",
        "usuarioApellido": "Perez Castro",
        "usuarioCorreo": "perezcastro@gmail.com",
      },
      
    },{
      "idSolicitud": 2,
      "estadoSolicitud": "aceptada",
      "producto": {
        "productoId": 43,
        "productoNombre": "Tarjeta Ruby"
      },
      "usuario": {
        "usuarioId": 34,
        "usuarioNombre": "Kenneth Spencer",
        "usuarioApellido": "Raymond Jackson",
        "usuarioCorreo": "bigej@wev.si",
      },
      
    }
  ]

}
