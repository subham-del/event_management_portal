import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(userdata: any) {
    return this.http.post("https://localhost:7273/api/user",
      JSON.stringify(userdata),
      {
        headers:{
          "content-type": 'application/json'
        }
      }
    )
  }

  createEvent(EventDetails:any){
    return this.http.post("https://localhost:7273/api/event",
      JSON.stringify(EventDetails),
      {
        headers:{
          "content-type": 'application/json'
        }
      }
    )
  }


  getEventDetails(){
    return this.http.get("https://localhost:7273/api/get-events")
  }

  getUserNotifications(){
    return this.http.get("https://localhost:7273/api/user-notifications/nsubham162@gmail.com")
  }

}
