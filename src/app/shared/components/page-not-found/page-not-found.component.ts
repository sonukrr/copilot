import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {

  pageTitle: string = 'page not found';
  @Input() type = '';
  @Input() message = '';
  
  constructor() { }

}
