import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../services/data-store.service';
import { combineLatest } from 'rxjs';
import { DbQueryService } from '../../services/db-query.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {


  allResponse : any
  isClicked : boolean = false
  selectedJobId : any;
  constructor(
    // private dataService: DataService,
    public dbqService: DbQueryService,
    public dataStoreService: DataStoreService
  ) {
  }
  ngOnInit(): void {
    this.fetchInitialData()
  }

  fetchInitialData(){
    combineLatest({
      // noOfJObs: this.createEditServiceService.getNoOfJobs(fd),
      jobs: this.dbqService.getJobs(),
      candidates: this.dbqService.getCandidates(),
      interviews: this.dbqService.getInterviews(),
      
    }).subscribe({next : (response:any)=>{
  
      // this.isLoading = false
      this.allResponse = response
      console.log(response)
      
    },error: (err:any)=>{
      // this.isLoading = false
      console.log(err)
    }})
  }

  selectJob(id:any){
    this.selectedJobId= id  ;
    this.isClicked = true
  }

  goBack(){
    this.selectedJobId = 'id'  ;
    this.isClicked = false
  }

}
