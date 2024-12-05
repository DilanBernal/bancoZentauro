package co.ue.dao;

import co.ue.model.Usuario;
import co.ue.model.Usuario.Rol;

import java.util.List;
import java.util.Optional;

public interface IUserDao {
    Usuario registerUser(Usuario user);
    Usuario updateUsuario(Usuario user);
    Optional<Usuario> searchByEmail(String email);
    Optional<Usuario> searchById(int id);
    List<Usuario> searchByRol(Rol rol);
    List<Usuario> searchAllByName(String name);
    List<Usuario> allUser();
    boolean existByEmail(String email);
    void deleteUser(int id);
}
