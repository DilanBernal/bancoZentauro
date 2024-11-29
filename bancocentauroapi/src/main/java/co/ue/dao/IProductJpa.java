package co.ue.dao;

import co.ue.model.Producto;
import co.ue.model.Producto.Tipo;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;



public interface IProductJpa extends JpaRepository<Producto,Integer>{
    Optional<Producto> findByProductoId(int productoId);
    Optional<Producto> findByProductoNombre(String productoNombre);
    List<Producto> findAllByProductoNombre(String nnombre);
    List<Producto> findByProductTipo(Tipo productTipo);
    boolean existsByProductoNombre(String productoNombre);
    boolean existsByProductoId(int productoId);
    void deleteByProductoId(int productoId);

}
