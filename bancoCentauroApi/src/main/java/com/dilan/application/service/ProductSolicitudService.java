package com.dilan.application.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dilan.infrastructure.dao.IProductSolicitudDao;
import com.dilan.infrastructure.model.ProductSolicitud;
import com.dilan.infrastructure.model.ProductSolicitud.Estado;
import com.dilan.infrastructure.model.Producto;
import com.dilan.infrastructure.model.Usuario;

@Service
public class ProductSolicitudService implements IProductSolicitudService{
    @Autowired
    IProductSolicitudDao dao;

    @Override
    public ProductSolicitud addSolicitud(ProductSolicitud solicitud) {
        return dao.registerSolicitud(solicitud);
    }

    @Override
    public ProductSolicitud updateSolicitud(int id, ProductSolicitud solicitud) {
        if(dao.existsByIdSolicitud(id)){
            Optional<ProductSolicitud> optionalSolicitud = dao.searchById(id);
            ProductSolicitud existingSolicitud = optionalSolicitud.get();

            existingSolicitud.setProducto(solicitud.getProducto());
        }
        return null;
    }

    @Override
    public Optional<ProductSolicitud> getById(int id) {
        return dao.searchById(id);
    }

    @Override
    public List<ProductSolicitud> getByEstado(Estado estado) {
        return dao.searchByEstado(estado);
    }

    @Override
    public List<ProductSolicitud> getByProductoAndEstado(Producto producto, Estado estado) {
        return dao.searchByProductoAndEstadoSolicitud(producto, estado);
    }

    @Override
    public boolean existsByIdSolicitud(int id) {
        return dao.existsByIdSolicitud(id);
    }

    @Override
    public boolean existsByUsuario(Usuario usuario) {
        return dao.existsByUsuario(usuario);
    }

    @Override
    public void deleteProductSolicitud(int id) {
        dao.deleteProductSolicitud(id);
    }

    @Override
    public ProductSolicitud updateStatusSolicitud(int id, Estado estado) {

        if(dao.existsByIdSolicitud(id)){
            Optional<ProductSolicitud> optionalSolicitud = dao.searchById(id);
            ProductSolicitud existingSolicitud = optionalSolicitud.get();

            existingSolicitud.setEstadoSolicitud(estado);
        }
        return null;
    }

    @Override
    public List<ProductSolicitud> getAll() {
        return dao.searchAll();
    }

    @Override
    public List<ProductSolicitud> getByUsuario(Optional<Usuario> user) {
        return dao.searchByUser(user);
    }

}
