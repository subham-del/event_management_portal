import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './user/landing-page/landing-page.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

import { ConfirmcodeComponent } from './user/confirmcode/confirmcode.component';

const routes: Routes = [
  {path:'', component:RegisterComponent},
{path:'confirmationCode',component:ConfirmcodeComponent},
  {path:'login', component:LoginComponent},
  {path:'home',component:LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
