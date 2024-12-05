import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public showHeader:boolean = true;
  public rolUser:any = ''
  public saveUser:boolean = false;

  
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
}
