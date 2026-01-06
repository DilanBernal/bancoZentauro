import { Injectable } from '@angular/core';

interface UserRegistration {
  usuarioNombre: string;
  usuarioApellido: string;
  usuarioCorreo: string;
  usuarioPassword: string;
  usuarioRol: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: UserRegistration | null = null;

  constructor() {
    this.initializeUser();
  }

  private initializeUser(): void {
    const storedUser = this.getStoredUser();
    if (storedUser) {
      this.currentUser = storedUser;
    }
  }

  getStoredUser(): UserRegistration | null {
    const localUser = localStorage.getItem('user');
    const sessionUser = sessionStorage.getItem('user');

    return localUser ? JSON.parse(localUser) : 
           sessionUser ? JSON.parse(sessionUser) : null;
  }

  storeUserLocally(user: UserRegistration): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUser = user;
  }

  storeUserInSession(user: UserRegistration): void {
    sessionStorage.setItem('user', JSON.stringify(user));
    this.currentUser = user;
  }

  setCurrentUser(user: UserRegistration): void {
    this.currentUser = user;
  }

  clearStoredUser(): void {
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    this.currentUser = null;
  }

  getCurrentUser(): UserRegistration | null {
    return this.currentUser;
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }
}