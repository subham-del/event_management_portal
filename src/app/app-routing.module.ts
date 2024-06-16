import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './user/landing-page/landing-page.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

import { ConfirmcodeComponent } from './user/confirmcode/confirmcode.component';
import { EventpageComponent } from './user/eventpage/eventpage.component';
import { MyeventComponent } from './user/myevent/myevent.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { PendingEventRequestComponent } from './admin/pending-event-request/pending-event-request.component';
import { UsernotificationComponent } from './user/usernotification/usernotification.component';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'confirmationCode', component: ConfirmcodeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: LandingPageComponent },
  { path: 'eventRegistration', component: EventpageComponent },
  { path: 'my-events', component: MyeventComponent },
  { path: 'admin', component: AdminloginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/pending-requests', component: PendingEventRequestComponent },
  { path: 'notification', component: UsernotificationComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
