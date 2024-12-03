package co.ue.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.ue.model.ProductSolicitud;
import co.ue.service.IProductSolicitudService;

@RestController
@RequestMapping(value = "solicitudes")
@CrossOrigin(origins = "*")
public class ProductSolicitudController {

    @Autowired
    IProductSolicitudService service;

    @GetMapping(value = "buscar")
    public ResponseEntity<ProductSolicitud> getAll(){
        
        List<ProductSolicitud> respuesta = service.getAll();
        HttpHeaders header = new HttpHeaders();
        header.add("Cantidad_datos", String.valueOf(respuesta.size()));
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
        
    }
}
