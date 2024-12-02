package co.ue.service;

import co.ue.model.Producto;
import co.ue.model.Usuario;
import java.util.List;
import java.util.Optional;

public interface IProductoService {
    Producto addProducto(Usuario usuario);
    Producto updateProducto(int id, Producto producto);
    Optional<Producto> getById(int id);
    Optional<Producto> getByName(String name);
    List<Producto> allUser();
    List<Producto> getAllByName(String name);
    boolean existByName(String name);
    void deleteProduct(int id);
}
