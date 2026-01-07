package com.dilan.infrastructure.jwt;

import org.springframework.security.core.userdetails.UserDetails;

public interface IJwtService {
  String getToken(UserDetails user);
  String getUsernameFromToken(String token);
  boolean isTokenValid(String token, UserDetails userDetails);
}
