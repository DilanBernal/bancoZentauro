package com.dilan.infrastructure.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.List;


/**
 * The persistent class for the producto database table.
 *
 */
@Entity
@Data
@NamedQuery(name="Producto.findAll", query="SELECT p FROM Producto p")
public class Producto implements Serializable {
	private static final long serialVersionUID = 1L;

  public Producto() {
  }

  public Producto(String productoNombre, String productoDescripcion, int productoIdImagen, Tipo productTipo) {
    this.productoNombre = productoNombre;
    this.productoDescripcion = productoDescripcion;
    this.productoIdImagen = productoIdImagen;
    this.productTipo = productTipo;
  }

  @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="producto_id")
	private int productoId;

	@Column(name="producto_nombre")
	private String productoNombre;
	@Column(name="producto_descripcion")
	private String productoDescripcion;

	@Column(name="producto_id_imagen")
	private int productoIdImagen;

	@Column(name="product_tipo")
	@Enumerated(EnumType.STRING)
	private Tipo productTipo;

	@Column(name="producto_veces")
	private double productoVeces;


	//bi-directional many-to-one association to ProductDetail
	@OneToMany(mappedBy="producto")
	@JsonIgnore
	private List<ProductDetail> productDetails;

	//bi-directional many-to-one association to ProductSolicitud
	@OneToMany(mappedBy="producto")
	@JsonIgnore
	private List<ProductSolicitud> productSolicituds;

	public ProductDetail addProductDetail(ProductDetail productDetail) {
		getProductDetails().add(productDetail);
		productDetail.setProducto(this);

		return productDetail;
	}

	public ProductDetail removeProductDetail(ProductDetail productDetail) {
		getProductDetails().remove(productDetail);
		productDetail.setProducto(null);

		return productDetail;
	}

	public List<ProductSolicitud> getProductSolicituds() {
		return this.productSolicituds;
	}

	public void setProductSolicituds(List<ProductSolicitud> productSolicituds) {
		this.productSolicituds = productSolicituds;
	}

	public ProductSolicitud addProductSolicitud(ProductSolicitud productSolicitud) {
		getProductSolicituds().add(productSolicitud);
		productSolicitud.setProducto(this);

		return productSolicitud;
	}

	public ProductSolicitud removeProductSolicitud(ProductSolicitud productSolicitud) {
		getProductSolicituds().remove(productSolicitud);
		productSolicitud.setProducto(null);

		return productSolicitud;
	}

	public enum Tipo{
		credito,
		debito,
		prepagada
	}

}
