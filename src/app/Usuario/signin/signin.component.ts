import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  constructor(private router:Router){}

  Home(){
    this.router.navigate(["home"]);
  }

  onSubmitAccount() {
  }
}
