import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const env = environment;

@Injectable({
  providedIn: 'root',
})
export class AppService {
  sessionTimeOut = false;
  isLocal = false;
  userRightsList: any;
  selectedEnv: any;
  API_URL: any
  COMPANY_URL:any

  constructor() {
    this.API_URL = env.API_URL
    // console.log(location)
    this.COMPANY_URL = location.href.replace("http://","").replace("https://","").replace("/v1","")
    // this.COMPANY_URL = 'zlite.preprod1.openings.co//manage/login/#/'
  }

  loaderColors: { solid_grey: string; transparent_grey: string; pine_green: string; } = {
    solid_grey: '#e4e4e4',
    transparent_grey: 'rgba(0, 0, 0, 0.32)',
    pine_green: 'rgba(2, 45, 66, 0.4)',
  }

  showAlert: any = {
    message: null,
    messageType: null,
    show: false,
    timer: 0
  }

  portal: any = {
    admin: false,
    manage: false,
    referral: false,
    partner: false
  }




  showToast(message: string, messageType: 'success' | 'warning' | 'error' | 'info',
    show: boolean,
    timer: number) {
    this.showAlert.message = message;
    this.showAlert.messageType = messageType;
    this.showAlert.show = show;
    this.showAlert.timer = timer;
  }

  updatePortal() {

    // const url =this.router.url;
    const url = window.location.pathname;
    for (const key in this.portal) {
      if (url.includes(key))
        this.portal[key] = true;
    }

  }

  updateDocTitle(text:string){
    document.title = text;
  }

  PATHS = {
    folderpath : '',
    RESUMEUPLAODPATH :'',
    INVOICEPATH :'',
    TALENTCOMMUNITYRESUMEUPLAODPATH :'',
    CANDIDATEDOCUMENTSPATH :'',
    CANDIDATEOFFERLETTERFOLDERPATH :'',
    REPORTSTEMPFOLDERPATH :'',
    RBACFILEPATH :'',
    EMPLOYEESAMPLEDARATEMPFOLDERPATH :'',
    COMPANYURL: ''
  }


}
