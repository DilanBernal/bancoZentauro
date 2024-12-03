package co.ue.service;

import co.ue.dao.IProductSolicitudDao;
import co.ue.model.ProductSolicitud;
import co.ue.model.ProductSolicitud.Estado;
import co.ue.model.Producto;
import co.ue.model.Usuario;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        return dao.searchByEstado(Estado.aceptada);
    }

}
