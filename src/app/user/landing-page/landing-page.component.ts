import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  constructor(private service:AuthService, private router:Router){}

  handleClick(){
    this.router.navigate(['eventRegistration'])
  }

  signOut(){
    this.service.logOut();
   
  }
}
