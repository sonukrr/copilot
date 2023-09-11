import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import {MatLegacySnackBar as MatSnackBar} from '@angular/material/legacy-snack-bar';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.scss']
})
export class AlertBoxComponent implements AfterViewInit {

  @Input()
  durationInSeconds = 3;

  @Input()
  messageToDisplay = '';

  @ViewChild('snackBarTmplRef')
  snackBarTmplRef: any;

  constructor(private _snackBar: MatSnackBar) { }

  ngAfterViewInit(): void {
    this._snackBar.openFromTemplate(this.snackBarTmplRef, {
      duration: this.durationInSeconds * 1000,
    });
  }


}
