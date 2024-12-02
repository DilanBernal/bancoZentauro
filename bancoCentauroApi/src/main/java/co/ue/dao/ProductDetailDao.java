package co.ue.dao;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import co.ue.model.ProductDetail;
import co.ue.model.ProductDetail.Status;
import co.ue.model.Usuario;

public class ProductDetailDao implements IProductDetailDao{

	@Autowired
	IProductDetailJpa jpa;
	
	@Override
	public ProductDetail addProductDetail(ProductDetail productDetail) {
		return jpa.save(productDetail);
	}
	
	@Override
	public ProductDetail updateProductDetail(int id,ProductDetail productDetail) {
		return jpa.save(productDetail);
	}

	@Override
	public Optional<ProductDetail> searchById(int id) {
		return jpa.findById(id);
	}

	@Override
	public List<ProductDetail> searchByUsuario(Usuario usuario) {
		return jpa.findByUsuario(usuario);
	}

	@Override
	public List<ProductDetail> searchByFechaSolicitud(Date fechaSolicitud) {
		return jpa.findByFechaSolicitud(fechaSolicitud);
	}

	@Override
	public List<ProductDetail> searchByFechaEntrega(Date fechaEntrega) {
		return jpa.findByFechaEntrega(fechaEntrega);
	}

	@Override
	public List<ProductDetail> searchByEstado(Status estado) {
		return jpa.findByEstado(estado);
	}

	@Override
	public boolean existsByUsuario(Usuario usuario) {
		return jpa.existsByUsuario(usuario);
	}

	@Override
	public boolean existsByEstado(Status estado) {
		return jpa.existsByEstado(estado);
	}

	@Override
	public void deleteProductDetail(int id) {
		jpa.deleteById(id);
	}

}
