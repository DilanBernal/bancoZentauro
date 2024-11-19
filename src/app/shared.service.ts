import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public showHeader:boolean = true;

  getShowHeader(): boolean{
    return this.showHeader
  }
  setShowHeader(value:boolean):void{
    this.showHeader = value;
  }
}
