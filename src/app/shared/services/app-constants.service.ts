import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConstantsService {

  constructor() { }

  private portal : any = {
    admin: {
      companyId: 0
    },
    manage: {

    }
  }

  private _loginValidationMessage: LoginValidationMessage = {
    incorrectCred: " Sorry! Looks like you typed it wrong. Please try again.",
    accountDeactivated: "Your account has been deactivated",
  };

  public get loginValidationMessage(): LoginValidationMessage {
    return this._loginValidationMessage;
  }

  public get admin() : {companyId: number} {
    return this.portal.admin;
  }

  public get manage() : any {
    return this.portal.manage;
  }



}

interface LoginValidationMessage{
  readonly incorrectCred: string,
  readonly accountDeactivated: string
}
