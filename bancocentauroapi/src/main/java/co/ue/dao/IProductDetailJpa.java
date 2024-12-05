package co.ue.dao;

import co.ue.model.ProductDetail;
import co.ue.model.ProductDetail.Status;
import co.ue.model.Usuario;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Date;




public interface IProductDetailJpa  extends JpaRepository<ProductDetail, Integer>{
	
	List<ProductDetail> findByEstado(Status estado);
	List<ProductDetail> findByUsuario(Usuario usuario);
	List<ProductDetail> findByFechaSolicitud(Date fechaSolicitud);
	List<ProductDetail> findByFechaEntrega(Date fechaEntrega);
	boolean existsByUsuario(Usuario usuario);
	boolean existsByEstado(Status estado);
	ProductDetail findByProductosClienteId(int productosClienteId);
	
}
