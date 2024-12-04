package co.ue.service;

import co.ue.dao.IUserDao;
import co.ue.model.Usuario;
import co.ue.model.Usuario.Rol;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService implements IUsuarioService{
    @Autowired
    IUserDao dao;

    @Override
    public Usuario addUser(Usuario usuario) {
        return dao.registerUser(usuario);
    }

    @Override
    public Usuario updateUsuer(String email, Usuario newDataUsuario) {
        if(existByEmail(email)){
            Optional<Usuario> optionalUser = dao.searchByEmail(email);
            Usuario existingUsuario = optionalUser.get();

            existingUsuario.setUsuarioNombre(newDataUsuario.getUsuarioNombre());
            existingUsuario.setUsuarioApellido(newDataUsuario.getUsuarioApellido());
            return dao.updateUsuario(existingUsuario);
        }
        return null;
    }

    @Override
    public Optional<Usuario> getById(int id) {
        return dao.searchById(id);
    }

  @Override
  public Optional<Usuario> getByEmail(String email) {
    return dao.searchByEmail(email);
  }

  @Override
  public Optional<Usuario> getByEmailAndPassword(String email, String password) {
      if(existByEmail(email)){
        Usuario tempUsuario = dao.searchByEmail(email).orElse(null);



        String tempEmail = tempUsuario.getUsuarioCorreo();
        String tempPassword = tempUsuario.getUsuarioPassword();

        if(password.equals(tempPassword) & email.equals(tempEmail)){

          Optional<Usuario> usuarioRespuesta = Optional.of(tempUsuario);
          return usuarioRespuesta;
        }else return Optional.empty();
      }else return Optional.empty();
  }

  @Override
  public boolean existByEmailAndPassword(String email, String password) {
    if(existByEmail(email)){
      Usuario tempUsuario = dao.searchByEmail(email).orElse(null);



      String tempEmail = tempUsuario.getUsuarioCorreo();
      String tempPassword = tempUsuario.getUsuarioPassword();

      if(password.equals(tempPassword) & email.equals(tempEmail)){

        return true;
      }else return false;
    }else return false;

  }

  @Override
    public List<Usuario> getByRol(Rol rol) {
        return dao.searchByRol(rol);
    }



    @Override
    public List<Usuario> allUser() {
        return dao.allUser();
    }


    @Override
    public boolean existByEmail(String email) {
        return dao.existByEmail(email);
    }

    @Override
    public void deleteUser(int id) {
        dao.deleteUser(id);
    }
}
