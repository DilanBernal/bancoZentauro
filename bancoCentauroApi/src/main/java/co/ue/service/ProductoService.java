package co.ue.service;
import co.ue.dao.IProductDao;
import co.ue.model.Producto;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductoService implements IProductoService{
    @Autowired
    IProductDao dao;

    @Override
    public Producto addProducto(Producto producto) {
        return dao.registerProducto(producto);
    }

    @Override
    public Producto updateProducto(String nombre, Producto producto) {
        if(dao.existByName(nombre)){
            Optional <Producto> optionalProduct = dao.searchByName(nombre);
            Producto existingProducto = optionalProduct.get();

            existingProducto.setProductoNombre(producto.getProductoNombre());
            existingProducto.setProductoDescripcion(producto.getProductoDescripcion());
            existingProducto.setProductTipo(producto.getProductTipo());

            return dao.updateUsuario(existingProducto);
        }
        return null;
    }

    @Override
    public Optional<Producto> getById(int id) {
        return dao.searchById(id);
    }

    @Override
    public Optional<Producto> getByName(String name) {
        return dao.searchByName(name);
    }

    @Override
    public List<Producto> allProducts() {
        return dao.allProducts();
    }

    @Override
    public List<Producto> getAllByName(String name) {
        return dao.searchAllByName(name);
    }

    @Override
    public boolean existByName(String name) {
        return dao.existByName(name);
    }

    @Override
    public void deleteProduct(int id) {
        dao.deleteProduct(id);
    }
}
