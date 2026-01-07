package com.dilan.domain.port;

import com.dilan.application.dto.AuthResponseDTO;
import com.dilan.application.dto.LoginRequestDTO;
import com.dilan.application.dto.RegisterRequestDTO;

public interface IAuthPort {
  public AuthResponseDTO login(LoginRequestDTO request);
  public AuthResponseDTO register(RegisterRequestDTO request);
}
