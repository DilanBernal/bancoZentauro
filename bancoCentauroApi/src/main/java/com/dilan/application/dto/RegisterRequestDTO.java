package com.dilan.application.dto;

import lombok.*;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequestDTO {
  public String nombres;
  public String apellidos;
  public String email;
  public String password;
}
