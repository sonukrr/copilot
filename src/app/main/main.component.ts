import { Component } from '@angular/core';
import { AppService } from './services/app.service';
import { MainService } from './services/main.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(public mainService: MainService, public appService: AppService) { }

}
