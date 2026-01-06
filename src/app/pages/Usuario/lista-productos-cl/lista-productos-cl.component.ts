import { Component } from '@angular/core';

@Component({
    selector: 'app-lista-productos-cl',
    templateUrl: './lista-productos-cl.component.html',
    styleUrl: './lista-productos-cl.component.css',
    standalone: false
})
export class ListaProductosCLComponent {
  productos = [
    {
      "productoId": 43,
      "productoNombre": "Tarjeta De Estudiantes",
      "productoDescripcion": "Una tarjeta de crédito para estudiantes es una herramienta financiera diseñada para jóvenes en etapa universitaria. Ofrece un límite de crédito bajo, beneficios como recompensas en compras o descuentos educativos, y funciones para aprender a manejar finanzas de forma responsable. Suele tener requisitos flexibles para aplicar, como ingresos mínimos o la firma de un tutor. Es ideal para construir historial crediticio y cubrir necesidades básicas durante los estudios.",
      "productoIdImagen": 11,
      "productTipo": "credito",
      "productoVeces": 0.0
    },
    {
      "productoId": 44,
      "productoNombre": "Tarjeta Ruby",
      "productoDescripcion": "La tarjeta Ruby es el pase exclusivo para quienes valoran el lujo y la conveniencia. Ofrece recompensas excepcionales en viajes, compras y entretenimiento. Con tecnología de última generación, disfruta de pagos rápidos y seguros, además de un servicio al cliente prioritario disponible 24/7. Ruby te abre las puertas a experiencias únicas y beneficios premium diseñados para aquellos con gustos refinados y un estilo de vida activo.",
      "productoIdImagen": 12,
      "productTipo": "debito",
      "productoVeces": 0.0
    }
  ]

}
