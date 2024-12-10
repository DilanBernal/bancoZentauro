import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';


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

  error?: string

  loading:boolean = false

  constructor(private api:ApiService, private route:ActivatedRoute, private router:Router){}

  ngOnInit(){
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.cargarProducto(productId);
  }

  registerSolicitud(id:number){
    this.router.navigate([`product/${id}/form-solicitud`])
  }
  async cargarProducto(int:number){
    this.loading= true
    try {
      this.product = await this.api.getProductById(int);
      this.loading = false
    } catch(error) {
      console.error('Error al obtener el producto:', error)
      this.loading = false
    } 
  }

}
