import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { JobsComponent } from './modules/jobs/jobs.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent,
    JobsComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
    
  ]
})
export class MainModule { }