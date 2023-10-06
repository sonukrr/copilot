import { CommonService } from './../../shared/services/common.service';
import { Nav, Navs } from './../../shared/models/nav.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
        text: 'Jobs',
        link: '/jobs',
        logoPath: 'assets/img/manage-jobs.svg',
        altText: 'manage jobs',
        pageTitle: 'Manage Jobs'
      },
      {
        id: 2,
        text: 'Candidates',
        link: '/candidates',
        logoPath: 'assets/img/manage-requisitions.svg',
        altText: 'manage requisitions',
        pageTitle: 'Candidates'
      },
      {
        id: 3,
        text: 'Approvals',
        link: '/resdex',
        logoPath: 'assets/img/approvals.svg',
        altText: 'approvals',
        pageTitle: 'Approvals'
      }
    ],

    selected: null


  }

  selectedCompanyName = null;
  reRenderManageCompanies = false;
  isDefaultWorkflowNameChange: boolean = false;
  lastVisitedTab: Nav | undefined;

  toggleSideNavForMobile: boolean = true;

  constructor(private http: HttpClient, private commonService: CommonService) {

    this.setServerHost();
  }



  setServerHost() {
    this.SERVER_HOST = 'https://apidev1.copilot.com';
  }

  updatePassword(param: any) {
    const data = this.commonService.getFormDataFromJson(param);
    const url = this.SERVER_HOST + this.MANAGE_API.login.updatePassword;
    return this.http.post(url, data);
  }

  // removeSelectedCompany() {
  //   if (localStorage.getItem('selectedCompanyId')) {
  //     this.reRenderManageCompanies = true;
  //     this.selectedCompanyName = null;
  //     localStorage.removeItem('selectedCompanyId');
  //   }

  //   setTimeout(() => {
  //     this.reRenderManageCompanies = false;
  //   }, 0);
  // }

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
