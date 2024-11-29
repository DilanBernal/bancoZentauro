package co.ue.dao;

import co.ue.model.Usuario;
import co.ue.model.Usuario.Rol;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;



public interface IUserJpa  extends JpaRepository<Usuario,Integer>{
    
    Optional<Usuario> findByUsuarioNombre(String usuarioNombre);
    Usuario findByUsuarioCorreo(String usuarioCorreo);
    List<Usuario> findByUsuarioId(int usuarioId);
    List<Usuario> findAllByUsuarioNombre(String nombre);    
    List<Usuario> findByUsuarioRol(Rol usuarioRol);
    boolean existsByUsuarioNombre(String usuarioNombre);
    boolean existsByUsuarioCorreo(String usuarioCorreo);
    void deleteByUsuarioId(int usuarioId);

}
