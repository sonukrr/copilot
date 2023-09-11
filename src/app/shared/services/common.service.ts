import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

   // make this dynamic to convert nested objects to formdata
   getFormDataFromJson(obj: any) {
    const data = new FormData();
    for (const key in obj) {
      if(typeof(obj[key]) !== 'object' || key == 'file')
      data.append(key, obj[key]);
      else
      data.append(key, JSON.stringify(obj[key]));
    }
    return data;
  }

  createGetReqWithPrams(url: string, param: any){
    var len = Object.keys(param).length;
    var currLen = 0;
    if(len > 0)
      url += '?';
    for (const key in param) {
      if (Object.prototype.hasOwnProperty.call(param, key)) {
        const element = param[key];
        url += `${key}=${element}`;
        currLen++;
        if(currLen != len)
          url += '&';


      }
    }
    return url;
  }

  restrictSpecialChars(e: any) {
    var k;
    document.all ? k = e.keyCode : k = e.which;

    // ACII allowed A-Z, a-z, backspace, space, 0-9, %, -
    if (!((k >= 65 && k <= 90) || (k >= 97 && k <= 122) || k == 8 || k == 32 || (k >= 45 && k <= 57) || k == 37 || k == 45)) {
      e.preventDefault();
    }
  }

  deepCopy(obj: any) {
    obj = (obj == undefined) ? "" : obj;
    return (JSON.parse(JSON.stringify(obj)));
  }

  guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  openLinkInNewWindow(url: string) {
    window.open("//" + url, "_blank");
  }

  redirectToLogin() {
    localStorage.clear();
    window.location.reload();
  }

}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}
