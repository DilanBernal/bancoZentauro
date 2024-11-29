package co.ue.dao;

import java.util.List;
import java.util.Optional;

import co.ue.model.Producto;
import co.ue.model.Producto.Tipo;

public interface IProductDao {
    Producto registerProducto(Producto producto);
    Producto updateUsuario(Producto producto);
    Optional<Producto> searchById(int id);
    Optional<Producto> searchByName(String name);
    List<Producto> searchAllByName(String name);
    List<Producto> searchAllByTipo(Tipo tipo);
    Boolean existByName(String name);
    void deleteProduct(int id);

}
