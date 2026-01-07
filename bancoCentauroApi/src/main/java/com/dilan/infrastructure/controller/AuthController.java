package com.dilan.infrastructure.controller;

import com.dilan.application.dto.AuthResponseDTO;
import com.dilan.application.dto.LoginRequestDTO;
import com.dilan.application.dto.RegisterRequestDTO;
import com.dilan.domain.port.IAuthPort;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AuthController {

  @Autowired
  private final IAuthPort authService;

  @PostMapping("register")
  public ResponseEntity<AuthResponseDTO> RegisterUser(@RequestBody RegisterRequestDTO request) {
    var response = authService.register(request);
    return new ResponseEntity<>(response, HttpStatus.CREATED);
  }

  @PostMapping("login")
  public ResponseEntity<AuthResponseDTO> LoginUser(@RequestBody LoginRequestDTO request) {
    var response = authService.login(request);
    return ResponseEntity.ok(response);
  }

}
