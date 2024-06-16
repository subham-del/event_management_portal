import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username:any
  password:any
  email:any
  
  

  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router, private userService:UserService) {
    
  }

  onSubmit(): void {
   
      console.log(this.username,this.password,this.email)
      this.authService.signUp(this.username, this.password, this.email).then(
        user => {
          this.userService.createUser({
            EmailId:this.email,
            UserName:this.username
          }).subscribe(()=>{})
          this.router.navigate(['confirmationCode'],{
            state:{
              email:this.email
            }
          })
          
        },
        err => {
         
        }
      );
    
  }


  handleClick(){
    this.router.navigate(['login'])
  }

  
}
