import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public showHeader:boolean = true;

  public selectedItem:string = ''

  getSelectedItem():string{
    return this.selectedItem;
  }

  setSelectedItem(value:string){
    this.selectedItem = value;
  }

  getShowHeader(): boolean{
    return this.showHeader
  }
  setShowHeader(value:boolean):void{
    this.showHeader = value;
  }
}
