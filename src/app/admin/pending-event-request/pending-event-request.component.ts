import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-pending-event-request',
  templateUrl: './pending-event-request.component.html',
  styleUrl: './pending-event-request.component.css'
})
export class PendingEventRequestComponent {
  constructor(private service: UserService, private adminService: AdminService) { }

  pendingRequests:any

  ngOnInit(){
    this.service.getEventDetails().subscribe((data)=>{
      this.pendingRequests = data
  })
  }

  approve(eventdata:any){
    this.adminService.updateEventStatus(eventdata.eventId).subscribe(()=>{
      this.adminService.sendNotification({
        EmailId: eventdata.email,
        EventId: eventdata.eventId,
        Message: `We are pleased to inform you that your request for the event, ${eventdata.name} has been approved by the admin team.`,
      }).subscribe((data)=>{
  
      })
    })
    
  }
  

}
