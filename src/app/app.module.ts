import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './user/landing-page/landing-page.component';
import { NavbarComponent } from './user/navbar/navbar.component';
import { LoginComponent } from './user/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './user/register/register.component';
import { ConfirmcodeComponent } from './user/confirmcode/confirmcode.component';
import { EventpageComponent } from './user/eventpage/eventpage.component';
import { HttpClientModule } from '@angular/common/http';
import { MyeventComponent } from './user/myevent/myevent.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { PendingEventRequestComponent } from './admin/pending-event-request/pending-event-request.component';
import { UsernotificationComponent } from './user/usernotification/usernotification.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmcodeComponent,
    EventpageComponent,
    MyeventComponent,
    DashboardComponent,
    AdminloginComponent,
    PendingEventRequestComponent,
    UsernotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
