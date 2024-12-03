package co.ue.dao;

import co.ue.model.Usuario;
import co.ue.model.Usuario.Rol;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDao implements IUserDao{

    @Autowired
    IUserJpa jpa;

    @Override
    public Usuario registerUser(Usuario user) {
        return jpa.save(user);
    }

    @Override
    public Usuario updateUsuario(Usuario user) {
        return jpa.save(user);
    }

    @Override
    public Optional<Usuario> searchById(int id) {
        return jpa.findById(id);
    }
    @Override
    public Optional<Usuario> searchByEmail(String email) {
        return jpa.findByUsuarioCorreo(email);
    }
    
    @Override
    public List<Usuario> searchByRol(Rol rol) {
        return jpa.findByUsuarioRol(rol);
    }

    @Override
    public List<Usuario> searchAllByName(String name) {
        return jpa.findAllByUsuarioNombre(name);
    }

    @Override
    public List<Usuario> allUser() {
        return jpa.findAll();
    }

    @Override
    public boolean existByEmail(String email) {
        return jpa.existsByUsuarioCorreo(email);
    }

    @Override
    public void deleteUser(int id) {
        jpa.deleteById(id);
    }


}
