import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorExists = false;
  errorText = "";

  constructor(private userService:UserService, private router:Router){}

  onSubmit(form: NgForm){
    let email = form.value.email;
    let password = form.value.password;
    let user = this.userService.getUser(email);

    if(!user){
      this.errorExists = true;
      this.errorText = "There is no registered user with email:" + email;
      return;
    }

    let isPasswordValid = this.userService.isPasswordCorrect(email, password);
    if(!isPasswordValid){
      this.errorExists = true;
      this.errorText = "Password is not correct";
      return;
    }

    this.errorExists = false;
    this.router.navigate(['']);
  }
}
