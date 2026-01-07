package com.dilan.infrastructure.dao;

import com.dilan.domain.enums.UserRole;
import com.dilan.infrastructure.model.Usuario;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;



public interface IUserJpa  extends JpaRepository<Usuario,Integer>{

    Optional<Usuario> findByUsuarioNombre(String usuarioNombre);
    Optional<Usuario> findByUsuarioCorreo(String usuarioCorreo);
    List<Usuario> findByUsuarioId(int usuarioId);
    List<Usuario> findAllByUsuarioNombre(String nombre);
    List<Usuario> findByUsuarioRol(UserRole usuarioRol);
    boolean existsByUsuarioNombre(String usuarioNombre);
    boolean existsByUsuarioCorreo(String usuarioCorreo);
    void deleteByUsuarioId(int usuarioId);

}
