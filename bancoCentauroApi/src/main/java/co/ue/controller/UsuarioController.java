package co.ue.controller;

import co.ue.model.Usuario;
import co.ue.model.Usuario.Rol;
import co.ue.service.IUsuarioService;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;




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
        return new ResponseEntity<List<Usuario>>(respuesta, HttpStatus.ACCEPTED);
    }

    @GetMapping(value = "getById/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Optional<Usuario>> getUsuarioById(@PathVariable int id){
        return new ResponseEntity<Optional<Usuario>>(service.getById(id), HttpStatus.ACCEPTED);
    }

    @GetMapping(value = "getByRol/{rol}")
    public ResponseEntity<List<Usuario>> getAllByRol(@PathVariable Rol rol){
        return new ResponseEntity<List<Usuario>>(service.getByRol(rol),HttpStatus.ACCEPTED);
    }
    @GetMapping(value = "existByEmail/{email}")
    public ResponseEntity<Boolean> existByEmail(@PathVariable String email){
        boolean existe = service.existByEmail(email);
        return new ResponseEntity<>(existe,HttpStatus.OK);
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
