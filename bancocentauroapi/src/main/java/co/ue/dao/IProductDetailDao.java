package co.ue.dao;

import co.ue.model.ProductDetail;
import co.ue.model.ProductDetail.Status;
import co.ue.model.Usuario;
import java.sql.Date;
import java.util.List;
import java.util.Optional;

public interface IProductDetailDao {
	ProductDetail addProductDetail(ProductDetail productDetail);
	ProductDetail updateProductDetail(ProductDetail productDetail);
	Optional<ProductDetail> searchById(int id);
	List<ProductDetail> searchByUsuario(Usuario usuario);
	List<ProductDetail> searchByFechaSolicitud(Date fechaSolicitud);
	List<ProductDetail> searchByFechaEntrega(Date fechaEntrega);
	List<ProductDetail> searchByEstado(Status estado);
	List<ProductDetail> searchAll();
	boolean existsByUsuario(Usuario usuario);
	boolean existsByEstado(Status estado);	
	boolean existById(int id);
	void deleteProductDetail(int id);
}
