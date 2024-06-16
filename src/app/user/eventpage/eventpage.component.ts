import { Component } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-eventpage',
  templateUrl: './eventpage.component.html',
  styleUrl: './eventpage.component.css'
})
export class EventpageComponent {
    EventDetails = {
      Name: "",
      Description: "",
      StartDate : '',
      EndDate: '',
      FirstName: "",
      LastName : "",
      status:"pending",
      Email: "",
      ContactNumber: null!,
      Participants: null!
    }


    constructor(private userService: UserService){

    }

   
    

    handleClick(){
      
      this.userService.createEvent(this.EventDetails).subscribe(()=>{})
    }
}
