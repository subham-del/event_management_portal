import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  emailaddress: string = '';
  password: string = '';
  constructor(private authservice: AuthService, private router:Router) {
  }

  onSignIn(form: NgForm) {
    if (form.valid) {
      this.authservice.login(this.emailaddress, this.password)
 
    }
  }

  handleClick(){
    this.router.navigate(['admin'])
  }
  
}


   