import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'copilot';

  constructor(){
    // if(window.location.href.includes("resdexauth/#/token")){
    //   window.location.href = window.location.href.replace("resdexauth/#/token", "resdexauth/token");
    // }
  }


}
