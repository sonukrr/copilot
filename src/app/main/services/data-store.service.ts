import { Injectable, OnInit } from '@angular/core';
import { DbQueryService } from './db-query.service';
import {Job} from '../models/job';
import { Candidate } from '../models/candidate';
import { Interview } from '../models/interview';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService implements OnInit {

  public jobs: Job[];
  public candidates: Candidate[];
  public interviews: Interview[];

  constructor(private dbQueryService: DbQueryService) {
  }

  ngOnInit(): void {

  }

  loadDataFromDb(){
    this.dbQueryService.getJobs().subscribe((data) => {
      this.jobs = data;
    });

    this.dbQueryService.getCandidates().subscribe((data) => {
      this.candidates = data;
    });

    this.dbQueryService.getInterviews().subscribe((data) => {
      this.interviews = data;
    });
  }


}
