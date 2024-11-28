package co.ue.model;

import java.io.Serializable;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


/**
 * The persistent class for the usuario database table.
 * 
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
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
	private List<ProductDetail> productDetails;

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

	public enum Rol{
		admin,
		cliente
	}
}