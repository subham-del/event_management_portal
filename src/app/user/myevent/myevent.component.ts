import { Component } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-myevent',
  templateUrl: './myevent.component.html',
  styleUrl: './myevent.component.css'
})
export class MyeventComponent {
  eventDetails:any
  myEvents:any
  constructor(private userService: UserService){}


  ngOnInit(){
    this.userService.getEventDetails().subscribe((data)=>{
      console.log(data)
      this.eventDetails = data
    })
  }
}
