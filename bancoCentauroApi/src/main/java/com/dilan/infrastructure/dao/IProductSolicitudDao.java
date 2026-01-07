package com.dilan.infrastructure.dao;

import java.util.List;
import java.util.Optional;

import com.dilan.infrastructure.model.ProductSolicitud;
import com.dilan.infrastructure.model.Producto;
import com.dilan.infrastructure.model.Usuario;
import com.dilan.infrastructure.model.ProductSolicitud.Estado;

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
