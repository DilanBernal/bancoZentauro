package co.ue.service;

import co.ue.dao.IProductDetailDao;
import co.ue.model.ProductDetail;
import co.ue.model.ProductDetail.Status;
import co.ue.model.Usuario;
import java.sql.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductDetailService implements IProductDetailService{
    @Autowired
    IProductDetailDao dao;

    @Override
    public ProductDetail addProductDetail(ProductDetail detalle) {
        return dao.addProductDetail(detalle);
    }

    @Override
    public ProductDetail updateProductDetail(int id,ProductDetail detalle) {
        if(dao.existById(id)){
            Optional<ProductDetail> optionalDetail = dao.searchById(id);
            ProductDetail existingDetail = optionalDetail.get();

            existingDetail.setUsuario(detalle.getUsuario());
            existingDetail.setProducto(detalle.getProducto());
            return dao.updateProductDetail(detalle);
        }
        return null;
    }

    @Override
    public Optional<ProductDetail> getById(int id) {
        return dao.searchById(id);
    }

    @Override
    public List<ProductDetail> getByUsuario(Usuario usuario) {
        return dao.searchByUsuario(usuario);
    }

    @Override
    public List<ProductDetail> getByFechaSolicitud(Date fecha) {
        return dao.searchByFechaSolicitud(fecha);
    }

    @Override
    public List<ProductDetail> getByFechaEntrega(Date fecha) {
        return dao.searchByFechaEntrega(fecha);
    }

    @Override
    public List<ProductDetail> getByEstado(Status estado) {
        return dao.searchByEstado(estado);
    }

    @Override
    public boolean existsByUsuario(Usuario usuario) {
        return dao.existsByUsuario(usuario);
    }

    @Override
    public boolean existsByEstado(Status estado) {
        return dao.existsByEstado(estado);
    }

    @Override
    public void deleteProductDetail(int id) {
        dao.deleteProductDetail(id);
    }

    @Override
    public ProductDetail updateDetailStatus(int id, ProductDetail detalle) {
        if(dao.existById(id)){
            Optional<ProductDetail> optionalDetail = dao.searchById(id);
            ProductDetail existingDetail = optionalDetail.get();

            existingDetail.setEstado(detalle.getEstado());
            existingDetail.setFechaEntrega(detalle.getFechaEntrega());
            return dao.updateProductDetail(detalle);
        }
        return null;
    }

    @Override
    public List<ProductDetail> getAllDetails() {
        return dao.searchAll();
    }

}
