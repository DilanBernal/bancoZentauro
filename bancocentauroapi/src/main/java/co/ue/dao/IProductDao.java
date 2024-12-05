package co.ue.dao;

import co.ue.model.Producto;
import co.ue.model.Producto.Tipo;
import java.util.List;
import java.util.Optional;

public interface IProductDao {
    Producto registerProducto(Producto producto);
    Producto updateUsuario(Producto producto);
    Optional<Producto> searchById(int id);
    Optional<Producto> searchByName(String name);
    List<Producto> searchAllByName(String name);
    List<Producto> searchAllByTipo(Tipo tipo);
    List<Producto> allProducts();
    boolean existByName(String name);
    void deleteProduct(int id);

}
