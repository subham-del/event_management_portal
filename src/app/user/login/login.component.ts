import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  emailaddress: string = '';
  password: string = '';
  constructor(private authservice: AuthService) {
  }

  onSignIn(form: NgForm) {
    if (form.valid) {
      this.authservice.login(this.emailaddress, this.password)
 
    }
  }
  
}


   