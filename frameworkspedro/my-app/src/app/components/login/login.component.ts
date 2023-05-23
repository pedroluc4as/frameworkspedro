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

    if(this.user == "pedro" && this.pwd == "pedro"){
      this.isSuccess = true;
      this.isError = false;
      this.router.navigate(['/dashboard']);

    } else {
      this.isError = true;
      this.isSuccess = false;

    }    // user == "beto@beto.com" pwd="beto"

    // console.log("User = " + this.user + " Password = " + this.pwd)

  }

}
