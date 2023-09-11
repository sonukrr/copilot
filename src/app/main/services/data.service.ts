import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Account } from 'src/app/shared/models/account.model';
import { CommonService } from 'src/app/shared/services/common.service';
import {  } from 'src/app/shared/services/app-constants.service';
import { AppService } from './app.service';
import { ServerApiService } from 'src/app/shared/services/server-api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public accountSubject: BehaviorSubject<any>;
  public userSubject: BehaviorSubject<any>
  public account: Observable<Account>;
  public companyConfigSubject : BehaviorSubject<any>

  private JOBS_API: any;
  private MANAGE_API: any;
  private SERVER_HOST = '';



  constructor( private commonService: CommonService , private http: HttpClient, private appService: AppService, private serverApi: ServerApiService  ) {
    this.accountSubject = new BehaviorSubject<any>(null);
    this.userSubject = new BehaviorSubject<any>(null)
    this.companyConfigSubject = new BehaviorSubject<any>(null)
    this.account = this.accountSubject.asObservable();
    this.setServerHost()
    this.JOBS_API = serverApi.api.admin;
    this.MANAGE_API = serverApi.api.manageJobs
}

  public accountValue(): Account {
    return this.accountSubject.getValue(); 
  }

  public companyConfigValue(): Account {
    return this.companyConfigSubject.getValue(); 
  }

  public userValue(): any {
    return this.userSubject.getValue();
  }

  setServerHost() {
    this.SERVER_HOST = this.appService.API_URL;
  }


}
