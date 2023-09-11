import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ServerApiService {

  constructor() { }

   API_LIST: any = {
   
  };

  public get api() : any {
    return this.API_LIST;
  }

}
