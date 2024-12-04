import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public showHeader:boolean = true;

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
    this.selectedItem = value;
  }

}
