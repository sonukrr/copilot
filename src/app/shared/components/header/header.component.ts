import { Component } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { DirectionService } from '../../services/direction.service';

import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public languageArray = ['en-US', 'gu-IN', 'hi-IN'];

  constructor(private directionService: DirectionService,
     public mainService: MainService,
    private commonService: CommonService,
    ) {


  }

  changeLang(lang: string) {
  }


  signOutUserHandler() {
    this.directionService.setDirection('logout');
    this.commonService.redirectToLogin();
  }

  // changePasswordHandler() {
  //   this.updateNavigation('Change Password');
  // }

  // seeHistoryHandler() {
  //   this.updateNavigation('See Login History');
  // }

  // updateNavigation(title: string) {
  //   this.mainService.lastVisitedTab = this.commonService.deepCopy(this.mainService.navs.selected);
  //   let changePasswordNav: Nav = {
  //     id: this.mainService.navs.options.length,
  //     pageTitle: title,
  //     text: '',
  //     logo: ''
  //   }
  //   this.mainService.navs.selected = this.commonService.deepCopy(changePasswordNav);
  // }

  toggleSideNav(){
    this.mainService.toggleSideNavForMobile = !this.mainService.toggleSideNavForMobile;
  }

}
