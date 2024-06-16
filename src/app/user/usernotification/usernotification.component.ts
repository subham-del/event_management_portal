import { Component } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-usernotification',
  templateUrl: './usernotification.component.html',
  styleUrl: './usernotification.component.css'
})
export class UsernotificationComponent {

  notifications:any
  constructor(private userservice: UserService){}

  ngOnInit(){
    this.userservice.getUserNotifications().subscribe((data)=>{
      this.notifications = data
    })
  }
}
