package co.ue.service;

import co.ue.model.ProductDetail;
import co.ue.model.ProductDetail.Status;
import co.ue.model.Usuario;
import java.sql.Date;
import java.util.List;
import java.util.Optional;

public interface IProductDetailService {
    ProductDetail addProductDetail(ProductDetail detalle);
    ProductDetail updateProductDetail(int id,ProductDetail detalle);
    Optional<ProductDetail> getById(int id);
    List<ProductDetail> getByUsuario(Usuario usuario);
    List<ProductDetail> getByFechaSolicitud(Date fecha);
    List<ProductDetail> getByFechaEntrega(Date fecha);
    List<ProductDetail> getByEstado(Status estado);
    boolean existsByUsuario(Usuario usuario);
    boolean existsByEstado(Status estado);
    void deleteProductDetail(int id);
}
