import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router){}
  isError = false;
  isSuccess = false;

  user = ""
  pwd = ""


  login(){
    this.isError = true;

    if(this.user == "beto" && this.pwd == "beto"){
      this.isSuccess = true;
      this.isError = false;
    } else {
      this.isError = true;
      this.isSuccess = false;
      this.router.navigate(['/dashboard']);

    }    // user == "beto@beto.com" pwd="beto"

    // console.log("User = " + this.user + " Password = " + this.pwd)

  }

}
