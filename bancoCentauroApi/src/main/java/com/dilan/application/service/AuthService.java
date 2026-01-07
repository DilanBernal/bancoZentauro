package com.dilan.application.service;

import com.dilan.application.dto.AuthResponseDTO;
import com.dilan.application.dto.LoginRequestDTO;
import com.dilan.application.dto.RegisterRequestDTO;
import com.dilan.domain.enums.UserRole;
import com.dilan.domain.port.IAuthPort;
import com.dilan.infrastructure.jwt.JwtService;
import com.dilan.infrastructure.model.Usuario;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.View;

@Service
@RequiredArgsConstructor
public class AuthService implements IAuthPort {
  private final IUsuarioService userService;
  private final JwtService jwtService;
  private final PasswordEncoder passwordEncoder;
  private final AuthenticationManager authManager;
  private final View error;

  @Override
  public AuthResponseDTO login(LoginRequestDTO request) {

    UsernamePasswordAuthenticationToken usrAnPswr = new UsernamePasswordAuthenticationToken(request.getEmail()
      , request.getPassword());
    System.out.println(usrAnPswr.toString());
    try {
      authManager.authenticate(usrAnPswr);
    } catch (RuntimeException e) {
      throw new RuntimeException("Authentication failed", e);
    }
    UserDetails user = userService.getByEmail(request.getEmail()).orElseThrow(() -> new UsernameNotFoundException(request.getEmail()));
    String token = jwtService.getToken(user);
    return new AuthResponseDTO(token);
  }

  @Override
  public AuthResponseDTO register(RegisterRequestDTO request) {

    if (userService.existByEmail(request.getEmail())) {
      throw new RuntimeException("User already exists");
    }
    var user = Usuario.builder()
      .usuarioPassword(passwordEncoder.encode(request.getPassword()))
      .usuarioCorreo(request.getEmail())
      .usuarioNombre(request.getNombres())
      .usuarioApellido(request.getApellidos())
      .usuarioRol(UserRole.cliente)
      .build();

    var token = new AuthResponseDTO(jwtService.getToken(user));
    if (token == null) {
      throw new RuntimeException("Error creating token");
    } else {
      userService.addUser(user);
      return token;
    }

  }
}
