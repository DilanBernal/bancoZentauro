package co.ue.dao;

import co.ue.model.ProductDetail;
import co.ue.model.ProductDetail.Status;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;


public interface IProductDetailJpa  extends JpaRepository<ProductDetail, Integer>{

    ProductDetail findByProductoId(int productoId);
    List<ProductDetail> findByEstado(Status estado);
    List<ProductDetail> findByProductosClienteId(int productosClienteId);
    List<ProductDetail> findByProductoIdAndProductoStatus(int productoId, Status productoStatus);


}
