package com.dilan.infrastructure.controller;

import com.dilan.application.dto.ProductCreationDTO;
import com.dilan.infrastructure.model.Producto;
import com.dilan.application.service.IProductoService;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "prd")
@CrossOrigin(origins = "*", maxAge = 3600,
  allowedHeaders = "*",
  methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
    RequestMethod.DELETE, RequestMethod.OPTIONS})
public class ProductoController {

    @Autowired
    IProductoService service;

    @GetMapping(value = "products", produces =  MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Producto>> getAll(){
        List<Producto> respuesta = service.allProducts();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Cantidad_datos", String.valueOf(respuesta.size()));
        return new ResponseEntity<>(respuesta, headers, HttpStatus.ACCEPTED);
    }

    @GetMapping(value = "searchByName/{name}")
    public ResponseEntity<List<Producto>> getAllByName(@PathVariable String name){
        List<Producto> respuesta = service.getAllByName(name);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Cantidad_datos", String.valueOf(respuesta.size()));

        return new ResponseEntity<>(respuesta, HttpStatus.ACCEPTED);
    }

    @GetMapping(value = "searchById/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Optional<Producto>> getByName(@PathVariable int id){

        Optional<Producto> respuesta = service.getById(id);

        return new ResponseEntity<Optional<Producto>>(respuesta, HttpStatus.ACCEPTED);
    }

    // public ResponseEntity<>

    @PostMapping(value = "register", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> registerProduct(@RequestBody ProductCreationDTO product, @RequestHeader HttpHeaders headers){

        service.addProducto(product);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping(value = "edit", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> editProduct(@RequestBody Producto product){
        String nombre = product.getProductoNombre();
        if(service.existByName(nombre)){
            service.updateProducto(nombre, product);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping(value = "delete/{id}", produces = MediaType.APPLICATION_JSON_VALUE)

    public ResponseEntity<Void> deleteUser(@PathVariable int id)  {
        service.deleteProduct(id);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }


    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleGeneralException(Exception ex) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error interno del servidor: " + ex.getMessage());
    }

}
