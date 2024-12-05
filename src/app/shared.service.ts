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
    if(userString != null){
      const userObject = JSON.parse(userString);
      return userObject.usuarioRol
    }else return'notLogueado'
  }
  
  public estaLogeado():boolean{
    var userString = localStorage.getItem('user')
    if(userString != null){
      var userObject = JSON.parse(userString)

      this.nombreUsuario = userObject.usuarioNombre;
      return true
    }else return false;
  }
}
