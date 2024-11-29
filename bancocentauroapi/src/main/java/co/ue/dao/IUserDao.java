package co.ue.dao;

import java.util.List;
import java.util.Optional;

import co.ue.model.Usuario;

public interface IUserDao {
    Usuario registerUser(Usuario user);
    Usuario updateUsuario(Usuario user);
    Optional<Usuario> searchById(int id);
    Optional<Usuario> searchByName(String name);
    List<Usuario> searchAllByName(String name);
    List<Usuario> allUser();
    Boolean existByEmail(String email);
    void deleteUser(int id);
}
