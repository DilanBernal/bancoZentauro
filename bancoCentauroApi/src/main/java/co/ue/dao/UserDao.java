package co.ue.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import co.ue.model.Usuario;

public class UserDao implements IUserDao{

    @Autowired
    IUserJpa jpa;

    @Override
    public Usuario registerUser(Usuario user) {
        return jpa.save(user);
    }

    @Override
    public Usuario updateUsuario(String email,Usuario user) {
        return jpa.save(user);
    }

    @Override
    public Optional<Usuario> searchById(int id) {
        return jpa.findById(id);
    }

    @Override
    public Optional<Usuario> searchByName(String name) {
        return jpa.findByUsuarioNombre(name);
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
