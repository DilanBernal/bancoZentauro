package co.ue.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.io.Serializable;
import java.util.List;


/**
 * The persistent class for the usuario database table.
 * 
 */
@Entity
@NamedQuery(name="Usuario.findAll", query="SELECT u FROM Usuario u")
public class Usuario implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="usuario_id")
	private int usuarioId;

	@Column(name="usuario_apellido")
	private String usuarioApellido;

	@Column(name="usuario_correo")
	private String usuarioCorreo;

	@Column(name="usuario_nombre")
	private String usuarioNombre;

	@Column(name="usuario_password")
	private String usuarioPassword;

	@Column(name="usuario_rol")
	@Enumerated(EnumType.STRING)
	private Rol usuarioRol;

	//bi-directional many-to-one association to ProductDetail
	@OneToMany(mappedBy="usuario")
	@JsonIgnore
	private List<ProductDetail> productDetails;

	//bi-directional many-to-one association to ProductSolicitud
	@OneToMany(mappedBy="usuario")
	@JsonIgnore
	private List<ProductSolicitud> productSolicituds;

	public Usuario() {
	}

	public int getUsuarioId() {
		return this.usuarioId;
	}

	public void setUsuarioId(int usuarioId) {
		this.usuarioId = usuarioId;
	}

	public String getUsuarioApellido() {
		return this.usuarioApellido;
	}

	public void setUsuarioApellido(String usuarioApellido) {
		this.usuarioApellido = usuarioApellido;
	}

	public String getUsuarioCorreo() {
		return this.usuarioCorreo;
	}

	public void setUsuarioCorreo(String usuarioCorreo) {
		this.usuarioCorreo = usuarioCorreo;
	}

	public String getUsuarioNombre() {
		return this.usuarioNombre;
	}

	public void setUsuarioNombre(String usuarioNombre) {
		this.usuarioNombre = usuarioNombre;
	}

	public String getUsuarioPassword() {
		return this.usuarioPassword;
	}

	public void setUsuarioPassword(String usuarioPassword) {
		this.usuarioPassword = usuarioPassword;
	}

	public Rol getUsuarioRol() {
		return this.usuarioRol;
	}

	public void setUsuarioRol(Rol usuarioRol) {
		this.usuarioRol = usuarioRol;
	}

	public List<ProductDetail> getProductDetails() {
		return this.productDetails;
	}

	public void setProductDetails(List<ProductDetail> productDetails) {
		this.productDetails = productDetails;
	}

	public ProductDetail addProductDetail(ProductDetail productDetail) {
		getProductDetails().add(productDetail);
		productDetail.setUsuario(this);

		return productDetail;
	}

	public ProductDetail removeProductDetail(ProductDetail productDetail) {
		getProductDetails().remove(productDetail);
		productDetail.setUsuario(null);

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
		productSolicitud.setUsuario(this);

		return productSolicitud;
	}

	public ProductSolicitud removeProductSolicitud(ProductSolicitud productSolicitud) {
		getProductSolicituds().remove(productSolicitud);
		productSolicitud.setUsuario(null);

		return productSolicitud;
	}
	
	public enum Rol{
		admin,
		cliente
	}

}