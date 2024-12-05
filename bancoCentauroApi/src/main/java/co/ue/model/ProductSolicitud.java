package co.ue.model;

import java.io.Serializable;
import jakarta.persistence.*;


/**
 * The persistent class for the product_solicitud database table.
 * 
 */
@Entity
@Table(name="product_solicitud")
@NamedQuery(name="ProductSolicitud.findAll", query="SELECT p FROM ProductSolicitud p")
public class ProductSolicitud implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_solicitud")
	private int idSolicitud;

	@Column(name="estado_solicitud")
	@Enumerated(EnumType.STRING)
	private Estado estadoSolicitud;

	//bi-directional many-to-one association to Producto
	@ManyToOne
	@JoinColumn(name="producto_id")
	private Producto producto;

	//bi-directional many-to-one association to Usuario
	@ManyToOne
	@JoinColumn(name="usuario_id")
	private Usuario usuario;

	public ProductSolicitud() {
	}

	public int getIdSolicitud() {
		return this.idSolicitud;
	}

	public void setIdSolicitud(int idSolicitud) {
		this.idSolicitud = idSolicitud;
	}

	public Estado getEstadoSolicitud() {
		return this.estadoSolicitud;
	}

	public void setEstadoSolicitud(Estado estadoSolicitud) {
		this.estadoSolicitud = estadoSolicitud;
	}

	public Producto getProducto() {
		return this.producto;
	}

	public void setProducto(Producto producto) {
		this.producto = producto;
	}

	public Usuario getUsuario() {
		return this.usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public enum Estado{
		aceptada,
		rechazada,
		en_espera
	}
}