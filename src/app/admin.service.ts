import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  
  login(email:any, pswd:any){
    // return this.http.get("")
  }

  sendNotification(notificationDetails:any){
    return this.http.post("https://localhost:7273/api/notification",JSON.stringify(notificationDetails),{
      headers:{
        "content-type": "application/json"
      }
    })
  }

  updateEventStatus(EventId: any){
    return this.http.put(`https://localhost:7273/api/update-status/1`,JSON.stringify({
      id: EventId
    }))
  }

}
