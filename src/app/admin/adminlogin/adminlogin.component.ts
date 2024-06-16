import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  emailaddress: string = '';
  password: string = '';

  constructor(private adminService:AdminService, private router:Router){}

  onSignIn(form: NgForm) {
    if (form.valid) {
      // this.adminService.login(this.emailaddress, this.password).subscribe((data)=>{
        
      // })

      this.router.navigate(['dashboard'])
 
    }
  }
}
