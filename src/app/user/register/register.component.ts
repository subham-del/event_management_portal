import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username:any
  password:any
  email:any
  

  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router) {
    
  }

  onSubmit(): void {
   
      
      this.authService.signUp(this.username, this.password, this.email).then(
        user => {
          this.router.navigate(['confirmationCode'])
        },
        err => {
         
        }
      );
    
  }

  
}
