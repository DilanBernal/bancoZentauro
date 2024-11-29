package co.ue.model;

import jakarta.persistence.*;
import java.io.Serializable;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;



/**
 * The persistent class for the producto database table.
 * 
 */
@Entity
@Data 
@NoArgsConstructor
@AllArgsConstructor
@Builder
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
	
	public enum Tipo{
		credito,
		debito,
		prepagada
	}

}