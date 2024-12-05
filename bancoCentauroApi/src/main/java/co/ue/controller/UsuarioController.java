package co.ue.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.ue.model.Usuario;
import co.ue.model.Usuario.Rol;
import co.ue.service.IUsuarioService;




@RestController
@RequestMapping(value = "usr")
@CrossOrigin(origins = "*")
public class UsuarioController {

    @Autowired
    IUsuarioService service;

    @GetMapping(value = "users", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Usuario>> getAllUser() {
        List<Usuario> respuesta = service.allUser();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Cantidad_datos", String.valueOf(respuesta.size()));
        return new ResponseEntity<>(respuesta,headers, HttpStatus.ACCEPTED);
    }

    @GetMapping(value = "getById/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Optional<Usuario>> getUsuarioById(@PathVariable int id){
        return new ResponseEntity<>(service.getById(id), HttpStatus.ACCEPTED);
    }

    @GetMapping(value = "getByRol/{rol}")
    public ResponseEntity<List<Usuario>> getAllByRol(@PathVariable Rol rol){
        return new ResponseEntity<>(service.getByRol(rol),HttpStatus.ACCEPTED);
    }
    @GetMapping(value = "existByEmail/{email}")
    public ResponseEntity<Boolean> existByEmail(@PathVariable String email){
        boolean existe = service.existByEmail(email);
        return new ResponseEntity<>(existe,HttpStatus.OK);
    }

    @PostMapping(value = "login")
    public ResponseEntity<Optional<Usuario>> loginUser(@RequestBody Usuario usuario){
      String tempCorreo = usuario.getUsuarioCorreo();
      String tempPassword = usuario.getUsuarioPassword();

      if(service.existByEmail(tempCorreo)){
        if(service.existByEmailAndPassword(tempCorreo, tempPassword)){
          Optional<Usuario> usuarioRespuesta = service.getByEmailAndPassword(tempCorreo, tempPassword);
          return new ResponseEntity<>(usuarioRespuesta, HttpStatus.ACCEPTED);
        }else return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
      }else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    @PostMapping(value = "register" , produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> registerUser(@RequestBody Usuario user){

        HttpHeaders headers = new HttpHeaders();
        service.addUser(user);
        headers.add("Correcto","Se agrego exitosamente");
        return new ResponseEntity<>(headers, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "user/delete/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable int id)  {
        service.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleGeneralException(Exception ex) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error interno del servidor: " + ex.getMessage());
    }

}
