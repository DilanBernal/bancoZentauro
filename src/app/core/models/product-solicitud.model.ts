import { SolicitudEstado } from '../enum/SolicitudEstado';
import { Product } from './product.model';
import { User } from "./user.model";


export interface ProductSolicitud {
  idSolicitud: number;
  estadoSolicitud: SolicitudEstado;
  producto: Product;
  usuario: User;
}
