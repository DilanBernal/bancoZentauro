package co.ue.dao;

import java.util.List;
import java.util.Optional;

import co.ue.model.ProductSolicitud;
import co.ue.model.Producto;
import co.ue.model.Usuario;
import co.ue.model.ProductSolicitud.Estado;

public interface IProductSolicitudDao {
    ProductSolicitud registerSolicitud(ProductSolicitud productSolicitud);
    ProductSolicitud updateProductSolicitud( ProductSolicitud productSolicitud);
    ProductSolicitud updateSolicitudStatus(ProductSolicitud solicitud);
    Optional<ProductSolicitud> searchById(int id);
    List<ProductSolicitud> searchAll();
    List<ProductSolicitud> searchByUser(Optional<Usuario> user);
    List<ProductSolicitud> searchByEstado(Estado estado);
    List<ProductSolicitud> searchByProductoAndEstadoSolicitud(Producto producto, Estado estado);
    boolean existsByIdSolicitud(int id);
    boolean existsByUsuario(Usuario usuario);
    void deleteProductSolicitud(int id);
}
