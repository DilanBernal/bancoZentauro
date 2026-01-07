package com.dilan.infrastructure.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
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

import com.dilan.infrastructure.model.ProductSolicitud;
import com.dilan.infrastructure.model.Producto;
import com.dilan.infrastructure.model.Usuario;
import com.dilan.infrastructure.model.ProductSolicitud.Estado;
import com.dilan.application.service.IProductSolicitudService;
import com.dilan.application.service.IProductoService;
import com.dilan.application.service.IUsuarioService;

@RestController
@RequestMapping(value = "slt")
@CrossOrigin(origins = "*")
public class ProductSolicitudController {

    @Autowired
    IProductSolicitudService service;

    @Autowired
    IUsuarioService serviceUsuario;

    @Autowired
    IProductoService serviceProducto;

    @GetMapping(value = "solicitudes")
    public ResponseEntity<List<ProductSolicitud>> getAll(){

        List<ProductSolicitud> respuesta = service.getAll();
        HttpHeaders header = new HttpHeaders();
        header.add("Cantidad_datos", String.valueOf(respuesta.size()));
        return new ResponseEntity<>(respuesta, HttpStatus.ACCEPTED);

    }
    @GetMapping(value = "searchByEstado/{stado}")
    public ResponseEntity<List<ProductSolicitud>> getByEstado(@PathVariable Estado stado){
        List<ProductSolicitud> respuesta = service.getByEstado(stado);

        HttpHeaders header = new HttpHeaders();
        header.add("Cantidad_datos", String.valueOf(respuesta.size()));
        return new ResponseEntity<>(respuesta, header, HttpStatus.ACCEPTED);
    }

    @GetMapping(value = "searchByEYP/{estado}/{idProducto}")
    public ResponseEntity<List<ProductSolicitud>> getByProductAndEstado (@PathVariable Estado estado, @PathVariable int id){
        Optional<Producto> optionalProduct = serviceProducto.getById(id);

        Producto producto = optionalProduct.get();

        List<ProductSolicitud> respuesta = service.getByProductoAndEstado(producto, estado);

        HttpHeaders header = new HttpHeaders();
        header.add("Cantidad_datos", String.valueOf(respuesta.size()));
        return new ResponseEntity<>(respuesta, header, HttpStatus.ACCEPTED);
    }

    @GetMapping(value = "searchById/{id}")
    public ResponseEntity<Optional<ProductSolicitud>> getById(@PathVariable int id){
        Optional<ProductSolicitud> respuesta = service.getById(id);

        return new ResponseEntity<>(respuesta, HttpStatus.ACCEPTED);
    }

    @GetMapping(value = "searchByUsuario/{id}")
    public ResponseEntity<List<ProductSolicitud>> buscarPorUsuario(@PathVariable int id){
        Optional<Usuario> usuario;
        usuario = serviceUsuario.getById(id);
        List<ProductSolicitud> respuesta = service.getByUsuario(usuario);

        return new ResponseEntity<>(respuesta, HttpStatus.ACCEPTED);
    }

    @PostMapping(value = "register")
    public ResponseEntity<Void> postSolicitud(@RequestBody ProductSolicitud solicitud){
        service.addSolicitud(solicitud);

        return new ResponseEntity<>( HttpStatus.CREATED);
    }

    @PutMapping(value = "editEstado/{id}")
    public ResponseEntity<Void> putSolicitudEstado(@PathVariable int id, @RequestBody Estado estado){
        service.updateStatusSolicitud(id, estado);
        return new ResponseEntity<>( HttpStatus.OK);
    }
    @DeleteMapping(value = "delete/{id}")
    public ResponseEntity<Void> deleteSolicitud(@PathVariable int id){
        service.deleteProductSolicitud(id);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleGeneralException(Exception ex) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error interno del servidor: " + ex.getMessage());
    }
}
