import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public showHeader:boolean = true;
  public rolUser:any = ''
  public saveUser:boolean = false;
  public nombreUsuario = '';
  
  public selectedItem:string = ''
  
  getShowHeader(): boolean{
    console.log("oasjfoa")
    return this.showHeader;
  }
  setShowHeader(value:boolean):void{
    this.showHeader = value;
  }
  
  getSelectedItem():string{
    return this.selectedItem;
  }
  setSelectedItem(value:string):void{
    console.log(localStorage.getItem('user'))
    this.selectedItem = value;
  }

  getRolUser(){
    const userString = localStorage.getItem('user')
    const userStringSession = sessionStorage.getItem('user')
    if(userString != null && userStringSession == null){
      const userObject = JSON.parse(userString);
      sessionStorage.setItem('user', userObject)
      return userObject.usuarioRol
    }else return'notLogueado'
  }
  
  public estaLogeado():boolean{
    var userString = localStorage.getItem('user')
    var userStringSession = sessionStorage.getItem('user')
    if(userString != null && userStringSession == null){
      var userObject = JSON.parse(userString)
      this.nombreUsuario = userObject.usuarioNombre;
      return true
    }else if(userString == null && userStringSession != null){
      var userObjectession = JSON.parse(userStringSession)
      this.nombreUsuario = userObjectession.usuarioNombre;
      console.log("Sesion, no local", userObjectession, "es el usuario")
      return true
    }else return false;
  }
}
