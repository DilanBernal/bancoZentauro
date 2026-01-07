package com.dilan.infrastructure.model;

import java.io.Serializable;
import jakarta.persistence.*;
import java.util.Date;


/**
 * The persistent class for the product_detail database table.
 *
 */
@Entity
@Table(name="product_detail")
@NamedQuery(name="ProductDetail.findAll", query="SELECT p FROM ProductDetail p")
public class ProductDetail implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="productosCliente_id")
	private int productosClienteId;

	@Column(name="estado")
	@Enumerated(EnumType.STRING)
	private Status estado;

	@Temporal(TemporalType.DATE)
	@Column(name="fecha_entrega")
	private Date fechaEntrega;

	@Temporal(TemporalType.DATE)
	@Column(name="fecha_solicitud")
	private Date fechaSolicitud;

	//bi-directional many-to-one association to Producto
	@ManyToOne
	@JoinColumn(name="producto_id")
	private Producto producto;

	//bi-directional many-to-one association to Usuario
	@ManyToOne
	@JoinColumn(name="usuario_id")
	private Usuario usuario;

	public ProductDetail() {
	}

	public int getProductosClienteId() {
		return productosClienteId;
	}

	public void setProductosClienteId(int productosClienteId) {
		this.productosClienteId = productosClienteId;
	}

	public Status getEstado() {
		return this.estado;
	}

	public void setEstado(Status estado) {
		this.estado = estado;
	}

	public Date getFechaEntrega() {
		return this.fechaEntrega;
	}

	public void setFechaEntrega(Date fechaEntrega) {
		this.fechaEntrega = fechaEntrega;
	}

	public Date getFechaSolicitud() {
		return this.fechaSolicitud;
	}

	public void setFechaSolicitud(Date fechaSolicitud) {
		this.fechaSolicitud = fechaSolicitud;
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

	public enum Status{
		activo,
		cancelada,
		sin_entregar,
		sin_activar
	}

}
