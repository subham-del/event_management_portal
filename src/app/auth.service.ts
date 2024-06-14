import { Injectable } from '@angular/core';

import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
  CognitoUserAttribute
} from "amazon-cognito-identity-js";

import { Router } from "@angular/router";




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userPool: any;
  cognitoUser: any;
  username: string = "";
  constructor(private router: Router) {
    this.userPool = new CognitoUserPool( {
      UserPoolId: "ap-south-1_l6Mg1cgG8",
      ClientId: "rv06odfjduhcti7au46hpsnsh",
    });
   }


  






  // Login
  login(emailaddress: any, password: any) {
    let authenticationDetails = new AuthenticationDetails({
      Username: emailaddress,
      Password: password,
    });

    let poolData = {
      UserPoolId: "ap-south-1_l6Mg1cgG8",
      ClientId: "rv06odfjduhcti7au46hpsnsh",
    };

    this.username = emailaddress;
    this.userPool = new CognitoUserPool(poolData);
    let userData = { Username: emailaddress, Pool: this.userPool };
    this.cognitoUser = new CognitoUser(userData);

    this.cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result: any) => {
        this.router.navigate(['home']);
        console.log("Success Results : ", result);
      },
      // First time login attempt
      newPasswordRequired: () => {
        this.router.navigate([""]);
      },
      onFailure: (error: any) => {
        console.log("error", error);
      },

    });
  }


  changePassword(
    oldPassword: string,
    newPassword: string,
    confirmPassword: string
  ) {
    if (newPassword === confirmPassword) {
      this.cognitoUser.completeNewPasswordChallenge(
        this.username,
        newPassword,
        {},
        {
          onSuccess: () => {
            console.log("Reset Success");
            this.router.navigate(["/login"]);
          },
          onFailure: () => {
            console.log("Reset Fail");
          },
        }
      );
    } else {
      console.log("Password didn't Match");
    }
  }

  logOut() {
    let poolData = {
      UserPoolId: "ap-south-1_l6Mg1cgG8",
      ClientId: "rv06odfjduhcti7au46hpsnsh",
    };
    this.userPool = new CognitoUserPool(poolData);
    this.cognitoUser = this.userPool.getCurrentUser();
    if (this.cognitoUser) {
      this.cognitoUser.signOut();
      this.router.navigate(['login']);
    }
  }



  signUp(username: string, password: string, email: string): Promise<any> {
    const attributeList = [
      new CognitoUserAttribute({
        Name: 'email',
        Value: email
      }),
      new CognitoUserAttribute({
        Name: 'name',
        Value: username
      }),

     
      
      
    ];

    return new Promise((resolve, reject) => {
      this.userPool.signUp(username, password, attributeList, null, (err:any, result:any) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result.user);
      });
    });
  }


  confirmUser(username: string, confirmationCode: string): Promise<any> {
    const userData = {
      Username: username,
      Pool: this.userPool
    };

    const cognitoUser = new CognitoUser(userData);

    return new Promise((resolve, reject) => {
      cognitoUser.confirmRegistration(confirmationCode, true, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      });
    });
  }




}
