import { ProductTipo } from '../enum/ProductTipo';

export interface Product {
  productoId: number;
  productoIdImagen: number;
  productoNombre: string;
  productoDescripcion: string;
  productoVeces: number;
  imageUrl?: string;
  productTipo: ProductTipo;
}
