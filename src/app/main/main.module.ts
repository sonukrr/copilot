import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { CandidatesComponent } from './modules/candidates/candidates.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent,
    CandidatesComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
    
  ]
})
export class MainModule { }