package com.dilan.application.service;

import com.dilan.application.dto.ProductCreationDTO;
import com.dilan.infrastructure.model.Producto;
import java.util.List;
import java.util.Optional;

public interface IProductoService {
    Producto addProducto(ProductCreationDTO producto);
    Producto updateProducto(String nombre, Producto producto);
    Optional<Producto> getById(int id);
    Optional<Producto> getByName(String name);
    List<Producto> allProducts();
    List<Producto> getAllByName(String name);
    boolean existByName(String name);
    void deleteProduct(int id);
}
