package co.ue.controller;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import co.ue.service.IUsuarioService;
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

import co.ue.model.ProductDetail;
import co.ue.model.Usuario;
import co.ue.model.ProductDetail.Status;
import co.ue.model.ProductSolicitud.Estado;
import co.ue.service.IProductDetailService;
import co.ue.service.IProductSolicitudService;

@RestController
@RequestMapping(value = "prdDetail")
@CrossOrigin(origins = "*")
public class ProductDetailController {

    @Autowired
    IProductDetailService service;

    @Autowired
    IProductSolicitudService solicitudService;

    @Autowired
    IUsuarioService usuarioService;

    @GetMapping(value = "details", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<ProductDetail>> getAll(){
        List<ProductDetail> respuesta = service.getAllDetails();
        HttpHeaders header = new HttpHeaders();
        header.add("Cantidad_datos", String.valueOf(respuesta.size()));
        return new ResponseEntity<>(respuesta, header, HttpStatus.ACCEPTED);
    }

    @GetMapping(value = "searchByEstado/{estado}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<ProductDetail>> getByEstado(@PathVariable Status estado){
        List<ProductDetail> respuesta = service.getByEstado(estado);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Cantidad_datos", String.valueOf(respuesta.size()));
        return new ResponseEntity<>(respuesta, headers, HttpStatus.ACCEPTED);
    }
    @GetMapping(value = "searchByDateSolicitud/{fecha}")
    public ResponseEntity<List<ProductDetail>> getByFechaSolicitud(@PathVariable Date fecha){
        List<ProductDetail>respuesta = service.getByFechaSolicitud(fecha);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Cantidad_datos", String.valueOf(respuesta.size()));
        return new ResponseEntity<>(respuesta, headers,HttpStatus.ACCEPTED);

    }
    @GetMapping(value = "searchByDateEntrega/{fecha}")
    public ResponseEntity<List<ProductDetail>> getByFechaEntrega(@PathVariable Date fecha){
        List<ProductDetail>respuesta = service.getByFechaEntrega(fecha);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Cantidad_datos", String.valueOf(respuesta.size()));
        return new ResponseEntity<>(respuesta, headers, HttpStatus.ACCEPTED);
    }

    @GetMapping(value = "searchByUsuario/{id}")
    public ResponseEntity<List<ProductDetail>> getByUsuario(@PathVariable int id){

        Optional<Usuario> usuario = usuarioService.getById(id);
        List<ProductDetail>respuesta = service.getByUsuario(usuario.orElse(null));
        HttpHeaders headers = new HttpHeaders();
        headers.add("Cantidad_datos", String.valueOf(respuesta.size()));
        return new ResponseEntity<>(respuesta, headers, HttpStatus.ACCEPTED);
    }
    
    @GetMapping(value = "searchById/{id}")
    public ResponseEntity<Optional<ProductDetail>> getByid(@PathVariable int id){
        Optional<ProductDetail>respuesta = service.getById(id);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Cantidad_datos", String.valueOf(respuesta));
        return new ResponseEntity<>(respuesta, headers, HttpStatus.ACCEPTED);
    }

    @PostMapping(value = "addBySolicitud/{idSolicitud}")
    public ResponseEntity<Void> postDetail(@RequestBody ProductDetail detail, @PathVariable int idSolicitud){
        solicitudService.updateStatusSolicitud(idSolicitud, Estado.aceptada);
        service.addProductDetail(detail);
        return new ResponseEntity<>( HttpStatus.CREATED);
    }

    @PutMapping(value = "editById/{id}")
    public ResponseEntity<Void> editDetail(@PathVariable int id, @RequestBody ProductDetail productDetail){

        service.updateDetailStatus(id, productDetail);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping(value = "editEstado/{id}")
    public ResponseEntity<Void> editStatusDetail(@PathVariable int id, @RequestBody ProductDetail detail){
        service.updateDetailStatus(id, detail);
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @DeleteMapping (value = "delete/{id}")
    ResponseEntity<Void> deleteDetail(@PathVariable int id){

        service.deleteProductDetail(id);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }


    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleGeneralException(Exception ex) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error interno del servidor: " + ex.getMessage());
    }


}
