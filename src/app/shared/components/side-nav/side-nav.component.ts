import { Nav, Navs } from './../../models/nav.model';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { animateText, onSideNavChange } from '../../animations/animation';

import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
declare var window: any;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [onSideNavChange, animateText]
})
export class SideNavComponent implements OnInit {

  sideNavState: boolean = false;
  showLinkText: boolean = false;
  iconColor: any = {};

  @Input()
  navs: Navs | undefined;

  @Output()
  navChange = new EventEmitter();

  constructor(public mainService: MainService, private router: Router) { }

  ngOnInit(): void {
    this.navs?.options.forEach(nav => {
      this.iconColor[nav.id] = '#737373';
    });
  }

  updateSelection(selectedNav: Nav) {
    this.navChange.emit(selectedNav);
    this.router.navigate([selectedNav.link])
  }

  onSideNavToggle() {
    this.sideNavState = !this.sideNavState;
    let timeOutTime = this.sideNavState ? 250 : 0;

    setTimeout(() => {
      this.showLinkText = this.sideNavState;
    }, timeOutTime)
  }

  setSVGpath(nav: any) {
    return nav.logoPath + '#' + nav.altText;
  }

  setIconColor(element: any, id: number, action: string) {
    if (!element.classList.contains('cp-nav-active')) {
      let color = '';
      switch (action) {
        case 'select':
          color = '#FFFFFF';
          break;
        case 'hover-on':
          color = '#28589F';
          break;
        case 'hover-off':
          color = '#737373';
          break;
        default:
          color = '#737373';
      }
      this.iconColor[id] = color;
      if (action == 'select') {
        this.navs?.options.forEach(nav => {
          if (id != nav.id) {
            this.iconColor[nav.id] = '#737373';
          }
        });
      }
    }
  }

}
