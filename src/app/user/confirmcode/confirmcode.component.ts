import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmcode',
  templateUrl: './confirmcode.component.html',
  styleUrl: './confirmcode.component.css'
})
export class ConfirmcodeComponent {
  username:any
  confirmationCode:any

  constructor(private authService: AuthService, private router:Router) {}
  onSubmit(): void {
     
      this.authService.confirmUser(this.username, this.confirmationCode).then(
        result => {
         this.router.navigate(['login'])
        },
        err => {
         
        }
      );
    }
}
