package co.ue.service;

import java.util.List;
import java.util.Optional;

import co.ue.model.ProductSolicitud;
import co.ue.model.Producto;
import co.ue.model.Usuario;
import co.ue.model.ProductSolicitud.Estado;

public interface IProductSolicitudService {
    ProductSolicitud addSolicitud(ProductSolicitud solicitud);
    ProductSolicitud updateSolicitud(int id,ProductSolicitud solicitud);
    Optional<ProductSolicitud> getById(int id);
    List<ProductSolicitud> getByEstado(Estado estado);
    List<ProductSolicitud> getByProductoAndEstado(Producto producto, Estado estado);
    boolean existsByIdSolicitud(int id);
    boolean existsByUsuario(Usuario usuario);
    void deleteProductSolicitud(int id);
}
