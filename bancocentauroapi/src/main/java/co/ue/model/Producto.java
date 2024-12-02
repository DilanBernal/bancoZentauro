package co.ue.model;

import java.io.Serializable;
import jakarta.persistence.*;
import java.util.List;


/**
 * The persistent class for the producto database table.
 * 
 */
@Entity
@NamedQuery(name="Producto.findAll", query="SELECT p FROM Producto p")
public class Producto implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="producto_id")
	private int productoId;

	@Column(name="product_tipo")
	@Enumerated(EnumType.STRING)
	private Tipo productTipo;

	@Column(name="producto_descripcion")
	private String productoDescripcion;

	@Column(name="producto_nombre")
	private String productoNombre;

	@Column(name="producto_veces")
	private double productoVeces;

	//bi-directional many-to-one association to ProductDetail
	@OneToMany(mappedBy="producto")
	private List<ProductDetail> productDetails;

	//bi-directional many-to-one association to ProductSolicitud
	@OneToMany(mappedBy="producto")
	private List<ProductSolicitud> productSolicituds;

	public Producto() {
	}

	public int getProductoId() {
		return this.productoId;
	}

	public void setProductoId(int productoId) {
		this.productoId = productoId;
	}

	public Tipo getProductTipo() {
		return this.productTipo;
	}

	public void setProductTipo(Tipo productTipo) {
		this.productTipo = productTipo;
	}

	public String getProductoDescripcion() {
		return this.productoDescripcion;
	}

	public void setProductoDescripcion(String productoDescripcion) {
		this.productoDescripcion = productoDescripcion;
	}

	public String getProductoNombre() {
		return this.productoNombre;
	}

	public void setProductoNombre(String productoNombre) {
		this.productoNombre = productoNombre;
	}

	public double getProductoVeces() {
		return this.productoVeces;
	}

	public void setProductoVeces(double productoVeces) {
		this.productoVeces = productoVeces;
	}

	public List<ProductDetail> getProductDetails() {
		return this.productDetails;
	}

	public void setProductDetails(List<ProductDetail> productDetails) {
		this.productDetails = productDetails;
	}

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