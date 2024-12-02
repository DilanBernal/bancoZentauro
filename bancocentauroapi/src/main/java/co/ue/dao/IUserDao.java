package co.ue.dao;

import co.ue.model.Usuario;
import java.util.List;
import java.util.Optional;

public interface IUserDao {
    Usuario registerUser(Usuario user);
    Usuario updateUsuario(String email,Usuario user);
    Optional<Usuario> searchById(int id);
    Optional<Usuario> searchByName(String name);
    List<Usuario> searchAllByName(String name);
    List<Usuario> allUser();
    boolean existByEmail(String email);
    void deleteUser(int id);
}
