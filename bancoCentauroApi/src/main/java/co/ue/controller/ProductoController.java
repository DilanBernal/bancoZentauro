package co.ue.controller;

import co.ue.model.Producto;
import co.ue.service.IProductoService;

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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "prd")
@CrossOrigin(origins = "*")
public class ProductoController {

    @Autowired
    IProductoService service;

    @GetMapping(value = "productos", produces =  MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Producto>> getAll(){
        List<Producto> respuesta = service.allProducts();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Cantidad_datos", String.valueOf(respuesta.size()));
        return new ResponseEntity<>(respuesta, headers, HttpStatus.ACCEPTED);
    }

    @GetMapping(value = "productosNombre/{name}")
    public ResponseEntity<List<Producto>> getAllByName(@PathVariable String name){
        List<Producto> respuesta = service.getAllByName(name);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Cantidad_datos", String.valueOf(respuesta.size()));

        return new ResponseEntity<>(respuesta, HttpStatus.ACCEPTED);
    }

    @GetMapping(value = "productoId/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Optional<Producto>> getByName(@PathVariable int id){

        Optional<Producto> respuesta = service.getById(id);

        return new ResponseEntity<Optional<Producto>>(respuesta, HttpStatus.ACCEPTED);
    }

    // public ResponseEntity<>

    @PostMapping(value = "crear", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> registerProduct(@RequestBody Producto product){

        service.addProducto(product);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping(value = "editar", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> editProduct(@RequestBody Producto product){
        String nombre = product.getProductoNombre();
        if(service.existByName(nombre)){
            service.updateProducto(nombre, product);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping(value = "pruduct/delte/{id}", produces = MediaType.APPLICATION_JSON_VALUE)

    public ResponseEntity<Void> deleteUser(@PathVariable int id)  {
        service.deleteProduct(id);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }


    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleGeneralException(Exception ex) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error interno del servidor: " + ex.getMessage());
    }

}
