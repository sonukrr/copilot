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
  private apiKey = '';
  private apiUrlVertex = 'http://services.test2.ff-services-test2.cluster.infoedge.com/prompt-execute-services/vertex/vertex-api/text/completions';
  private apiKeyVertex = '';
  private templateCode = '';
  private cookie = '';

  chat(query: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    const data = {
      messages: [{ role: "system", content: query }],
      model: "gpt-3.5-turbo",
    }

    return this.http.post(this.apiUrl, data, { headers });
  }

  getFitScore(params: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    let query = 'For the below mentioned job details and candidate details and provide a candidate fit score in experience, skillets and overall out of 10. provide only fit score nothing else. provide details in below format candidateFitScore : { experience: score/10, skillSet: score/10, Education: score/10, roleRelevance: score/10 ,overallFit : score/10 }. Job details are as follows,' +params.jobObject + '. Candidate details are as follows, ' + params.parsedResult;
    const data = {
      messages: [{ role: "system", content: query }],
      model: "gpt-3.5-turbo",
    }

    return this.http.post(this.apiUrl, data, { headers });
  }

  // getFitScoreVertex(query: string): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'templateCode': `${this.templateCode}`,
  //     'key': `${this.apiKey}`,
  //     'appId': 123,
  //     'systemId': 123
  //   });

  //   const data = {
  //     prompt: query,
  //     parameters: {
  //       temperature : 0,
  //       maxOutputTokens : 50,
  //       topK : 1,
  //       topP : 0.95
  //     },
  //     model: 'text-bison',
  //   }

  //   return this.http.post(this.apiUrl, data, { headers });
  // }
  

}