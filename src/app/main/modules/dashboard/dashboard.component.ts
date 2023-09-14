import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { AppService } from '../../services/app.service';
import { DataStoreService } from '../../services/data-store.service';
import { Job } from '../../models/job';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userDetails : any
  query:any
  disabled:boolean = false
  isLoading:boolean = false
  dummyResp2:string = ''
  constructor(
    private dataService: DataService,
    private appService: AppService,
    public dataStoreService: DataStoreService
  ) {
  }

  ngOnInit(): void {
    // SK- loads all data to dataStore service varaibles from json Db
    this.dataStoreService.loadDataFromDb();

    // this.dataService.chat("How are you?").subscribe({next : (res:any)=>{
    //   console.log(res)
    // },error : (err:any) =>{
    //   console.log(err)
    // }})

  }


  submit(){
    this.isLoading = true
    this.dataService.chat(this.query).subscribe({next : (res:any)=>{
      // console.log(res)
      this.isLoading = false
      this.startTypingEffect(res.choices[0].message.content)
    },error : (err:any) =>{
      console.log(err)
    }})

  }




  startTypingEffect(repsonseText:any) {
    const words = repsonseText.split(' ');

    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < words.length) {
        this.dummyResp2 = words.slice(0, currentIndex + 1).join(' ');
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
  }


}
