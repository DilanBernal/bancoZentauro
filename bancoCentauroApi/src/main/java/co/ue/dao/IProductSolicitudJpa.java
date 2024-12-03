package co.ue.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import co.ue.model.ProductSolicitud;
import co.ue.model.ProductSolicitud.Estado;
import co.ue.model.Producto;
import co.ue.model.Usuario;

import java.util.List;
import java.util.Optional;


public interface IProductSolicitudJpa extends JpaRepository<ProductSolicitud, Integer>{
	
    
	Optional<ProductSolicitud> findByIdSolicitud(int idSolicitud);
	List<ProductSolicitud> findByEstadoSolicitud(Estado estadoSolicitud);
	List<ProductSolicitud> findByProductoAndEstadoSolicitud(Producto producto, Estado estado);
	List<ProductSolicitud> findByUsuario(Optional<Usuario> usuario);
	boolean existsByIdSolicitud(int idSolicitud);
	boolean existsByUsuario(Usuario usuario);
	
}
