import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router:Router, private service:AuthService){}

 

  logOut(){
    this.service.logOut()
  }

  handleEvent(){
    this.router.navigate(['my-events'])
  }


  handleNotification(){
    this.router.navigate(['notification'])
  } 
}
