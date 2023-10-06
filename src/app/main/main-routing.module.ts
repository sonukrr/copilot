import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';
import { CandidatesComponent } from './modules/candidates/candidates.component';

const routes: Routes = [
  {path: '', component: MainComponent,
  children: [
    {path :'', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'candidates', component: CandidatesComponent},

    { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
