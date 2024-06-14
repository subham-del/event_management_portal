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

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmcodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
