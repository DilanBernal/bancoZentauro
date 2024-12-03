package co.ue.dao;

import co.ue.model.Producto;
import co.ue.model.Producto.Tipo;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ProductDao implements IProductDao{

    @Autowired
    IProductJpa jpa;

    @Override
    public Producto registerProducto(Producto producto) {
        return jpa.save(producto);
    }

    @Override
    public Producto updateUsuario(Producto producto) {
        return jpa.save(producto);
    }

    @Override
    public Optional<Producto> searchById(int id) {
        return jpa.findById(id);
    }

    @Override
    public Optional<Producto> searchByName(String name) {
        return jpa.findByProductoNombre(name);
    }

    @Override
    public boolean existByName(String name) {
        return jpa.existsByProductoNombre(name);
    }

    @Override
    public void deleteProduct(int id) {
        jpa.deleteByProductoId(id);
    }

    @Override
    public List<Producto> searchAllByName(String name) {
        return jpa.findAllByProductoNombre(name);
    }

    @Override
    public List<Producto> searchAllByTipo(Tipo tipo){
        return jpa.findByProductTipo(tipo);
    }

    @Override
    public List<Producto> allProducts() {
        return jpa.findAll();
    }
    
}
