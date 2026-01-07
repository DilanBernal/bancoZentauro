package com.dilan.infrastructure.dao;

import com.dilan.infrastructure.model.ProductSolicitud;
import com.dilan.infrastructure.model.ProductSolicitud.Estado;
import com.dilan.infrastructure.model.Producto;
import com.dilan.infrastructure.model.Usuario;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ProductSolicitudDao implements IProductSolicitudDao{

    @Autowired
    IProductSolicitudJpa jpa;

    @Override
    public ProductSolicitud registerSolicitud(ProductSolicitud productSolicitud) {
        return jpa.save(productSolicitud);
    }

    @Override
    public ProductSolicitud updateProductSolicitud(ProductSolicitud productSolicitud) {
        return jpa.save(productSolicitud);
    }

    @Override
    public Optional<ProductSolicitud> searchById(int id) {
        return jpa.findByIdSolicitud(id);
    }

    @Override
    public List<ProductSolicitud> searchByEstado(Estado estado) {
        return jpa.findByEstadoSolicitud(estado);
    }

    @Override
    public List<ProductSolicitud> searchByProductoAndEstadoSolicitud(Producto producto, Estado estado) {
        return jpa.findByProductoAndEstadoSolicitud(producto, estado);
    }


    @Override
    public boolean existsByIdSolicitud(int id) {
        return jpa.existsByIdSolicitud(id);
    }

    @Override
    public boolean existsByUsuario(Usuario usuario) {
        return jpa.existsByUsuario(usuario);
    }

    @Override
    public void deleteProductSolicitud(int id) {
        jpa.deleteById(id);
    }

    @Override
    public ProductSolicitud updateSolicitudStatus(ProductSolicitud solicitud) {
        return jpa.save(solicitud);
    }

    @Override
    public List<ProductSolicitud> searchAll() {
        return jpa.findAll();
    }

    @Override
    public List<ProductSolicitud> searchByUser(Optional<Usuario> user) {
        return jpa.findByUsuario(user);
    }

}
