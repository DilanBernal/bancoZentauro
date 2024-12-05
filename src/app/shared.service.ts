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
    const userStringSession = sessionStorage.getItem('user')
    if(userStringSession != null){
      const userObject = JSON.parse(userStringSession);
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
    }else if(userStringSession != null){
      var userObject = JSON.parse(userStringSession)
      this.nombreUsuario = userObject.usuarioNombre

      console.log("Objeto usuario",userObject.usuarioNombre, "Nombre en el this", this.nombreUsuario)
      return true
    }else return false
  }
}
