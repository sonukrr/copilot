
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Navs, Nav } from '../shared/models/nav.model';
import { CommonService } from '../shared/services/common.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {


  private SERVER_HOST = '';
  private MANAGE_API: any;


  loginDetails: any = {
    session: null,
    user: null,
    sessionTimeOut: false
  }

  navs: Navs = {
    options: [
      {
        id: 0,
        text: 'Dashboard',
        link: '',
        logoPath: 'assets/img/dashboard.svg',
        altText: 'dashboard',
        pageTitle: 'Dashboard'
      },
      {
        id: 1,
        text: 'Manage Jobs',
        link: '/job-list',
        logoPath: 'assets/img/manage-jobs.svg',
        altText: 'manage jobs',
        pageTitle: 'Manage Jobs'
      },
      {
        id: 2,
        text: 'Candidates',
        link: '/candidates',
        logoPath: 'assets/img/approvals.svg',
        altText: 'candidates',
        pageTitle: 'Candidates'
      },
    ],

    selected: null


  }

  selectedCompanyName = null;
  reRenderManageCompanies = false;
  isDefaultWorkflowNameChange: boolean = false;
  lastVisitedTab: Nav | undefined;

  toggleSideNavForMobile: boolean = true;

  constructor(private http: HttpClient, private commonService: CommonService) {

  }




  updatePassword(param: any) {
    const data = this.commonService.getFormDataFromJson(param);
    const url = this.SERVER_HOST + this.MANAGE_API.login.updatePassword;
    return this.http.post(url, data);
  }



  updateSelectedNav(nav?: Nav) {

    if (!nav) {
      this.navs.selected = this.navs.options[0];
    } else {
      this.navs.selected = nav;
    }

    //to be fetched later on page reload
    localStorage.setItem("navs", JSON.stringify(this.navs));
  }

}
