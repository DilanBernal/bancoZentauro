import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public selectedItem:string = ''

  public rolUser:any = ''

  getRolUser(){
    var tempData = localStorage.getItem('user')
    const userString = localStorage.getItem('user')
    if(userString != null){
      const userObject = JSON.parse(userString);
      console.log(userObject.usuarioRol)
      return userObject.usuarioRol
    }else return'notLogueado'
  }
  
  public estaLogeado():boolean{
    if(localStorage.getItem('user')){
      return true
    }else return false;
  }
  getSelectedItem():string{
    return this.selectedItem;
  }
  setSelectedItem(value:string):void{
    this.selectedItem = value;
  }

}
