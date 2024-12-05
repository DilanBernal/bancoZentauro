package co.ue.service;

import co.ue.model.Usuario;
import co.ue.model.Usuario.Rol;
import java.util.List;
import java.util.Optional;

public interface IUsuarioService {
    Usuario addUser(Usuario usuario);
    Usuario updateUsuer(String email, Usuario usuario);
    Optional<Usuario> getById(int id);
    Optional<Usuario> getByEmail(String email);
    Optional<Usuario> getByEmailAndPassword(String email, String password);
    boolean existByEmailAndPassword(String email, String password);
    List<Usuario> allUser();
    List<Usuario> getByRol(Rol Rol);
    boolean existByEmail(String email);
    void deleteUser(int id);
}
