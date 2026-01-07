package com.dilan.application.dto;

import com.dilan.infrastructure.model.Producto.Tipo;

public record ProductCreationDTO(String productoNombre,
                                 String productoDescripcion,
                                 int productoIdImagen,
                                 Tipo productoTipo) {
}
