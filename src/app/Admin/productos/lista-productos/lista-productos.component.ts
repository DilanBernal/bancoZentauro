import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})

export class ListaProductosComponent implements OnInit {

  productos = [
    { nombre: 'Producto 1', descripcion: 'Descripción del Producto 1', vecesAdquirido: 10, tipo: 'Electrónica' },
    { nombre: 'Producto 2', descripcion: 'Descripción del Producto 2', vecesAdquirido: 5, tipo: 'Ropa' },
    { nombre: 'Producto 3', descripcion: 'Descripción del Producto 3', vecesAdquirido: 20, tipo: 'Alimentos' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
