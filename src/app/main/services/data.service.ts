import { HttpClient, HttpHeaders } from '@angular/common/http';
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




  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = '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';



  
  chat(query: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    // const data = {
    //   "model": "gpt-3.5-turbo",
    //   "messages": [{"role": "user", "content": "who is virat kohli"}],
    //   "temperature": 0.7
    // }

    const data = {
      messages: [{ role: "system", content: query }],
      model: "gpt-3.5-turbo",
    }

    return this.http.post(this.apiUrl, data, { headers });
  }


}
