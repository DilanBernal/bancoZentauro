import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  showHeader: boolean = true;

  constructor(private router:Router){}
  Login(){
    this.router.navigate(["login"]);
    this.showHeader = false;
  }

  Signin(){
    this.router.navigate(["signin"]);
  }
}
