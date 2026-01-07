package com.dilan.infrastructure.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dilan.infrastructure.model.ProductSolicitud;
import com.dilan.infrastructure.model.ProductSolicitud.Estado;
import com.dilan.infrastructure.model.Producto;
import com.dilan.infrastructure.model.Usuario;

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
