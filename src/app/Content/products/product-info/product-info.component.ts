import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';


interface enumProductTipo {
  credito: string;
  debito: string;
  prepago: string;
}
interface Product {
  productoId: number,
  productoIdImagen: number;
  productoNombre: string;
  productoDescripcion: string;
  productTipo: enumProductTipo;
  imageUrl?: string;  // Añadimos una propiedad para almacenar la URL de la imagen
}

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css'
})
export class ProductInfoComponent {

  product?: Product

  constructor(private api:ApiService, private route:ActivatedRoute){}

  ngOnInit(){
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.cargarProducto(productId);
  }

  async cargarProducto(int:number){
    try {
      this.product = await this.api.getProductById(int);
    } catch(error) {
      console.error('Error al obtener el producto:', error)
    }
  }

}
