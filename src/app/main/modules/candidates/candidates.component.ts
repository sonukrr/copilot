import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataStoreService } from '../../services/data-store.service';
import { Candidate } from '../../models/candidate';
import { Interview } from '../../models/interview';
import * as Highcharts from 'highcharts';
import highchartsMore from 'highcharts/highcharts-more';
import exporting from 'highcharts/modules/exporting';

highchartsMore(Highcharts);
exporting(Highcharts);



@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit{




  allCandidatesDb: Candidate[];
  allInterviewsDb: Interview[];

  data: any = {};

  constructor(private dataStore: DataStoreService) {
    if(dataStore.candidates?.length > 0){
      localStorage.setItem('candidates', JSON.stringify(dataStore.candidates));
      localStorage.setItem('interviews', JSON.stringify(dataStore.interviews));

      this.allCandidatesDb = dataStore.candidates;
      this.allInterviewsDb = dataStore.interviews;

    }else{
      this.allCandidatesDb = JSON.parse(localStorage.getItem('candidates')!);
      this.allInterviewsDb = JSON.parse(localStorage.getItem('interviews')!);

    }
  }
  ngOnInit(): void {
    const res = this.setInitData();
    this.data = {
      totalCount: this.allCandidatesDb.length,
      upcomingInterviews: res.upcomingInterviews,
      pendingFeedback: res.pendingFeedback,
      pastInterviews: res.pastInterviews

    }

    this.renderSpiderWeb();

  }

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any = {
    chart: {
      polar: true,
      type: 'area'
    },
    title: {
      text: 'Spider Web Chart'
    },
    xAxis: {
      categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
      tickmarkPlacement: 'on',
      lineWidth: 0
    },
    yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      min: 0
    },
    tooltip: {
      shared: true,
      pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },
    series: [{
      name: 'Series 1',
      data: [80, 50, 60, 70, 90],
      pointPlacement: 'on'
    }, {
      name: 'Series 2',
      data: [70, 80, 50, 60, 80],
      pointPlacement: 'on'
    }]
  };

  getPreferredLocations (data: any){
		return data?.split(',');
	}

  getPreferredLocationsUpperBound  (dataLimit: any, limit: any){
    return Math.min(dataLimit, limit);
}

  transformSkillsToDisplay(skills: any){

    var delimitter = ' | ';
    var skillsStr = "";

    skillsStr = skills?.join(delimitter);
    return skillsStr;
  }

  renderSpiderWeb(){
    this.chartOptions.xAxis.categories = ['Experience', "Skills", "Education", "Overall"];
    this.chartOptions.series = [];
    this.data.pastInterviews.forEach((cand: Candidate)=> {
      this.chartOptions.series.push(
        {
          name: cand.name,
          data: [+cand.metaData.fitAnalysis.expScore, +cand.metaData.fitAnalysis.skillsScore, +cand.metaData.fitAnalysis.educationScore, +cand.metaData.fitAnalysis.overallFitScore],
          pointPlacement: 'on'
        }
      )
    })

    console.log(this.chartOptions);


  }


  setInitData(){
    const res: any = {
      upcomingInterviews: [],
      pendingFeedback: [],
      pastInterviews: []
    };
    var allPendingInt =  this.allInterviewsDb.filter((int: Interview) => {
      return int.status == 'Pending';

    });

    allPendingInt.forEach((int: Interview) => {
      var found = this.allCandidatesDb.find((cand: Candidate) => {
        return cand.metaData.interviewId == int.id;
      })
      res.upcomingInterviews.push(found);
    })


    var pendingFeedback =  this.allInterviewsDb.filter((int: Interview) => {
      return (new Date(int.dateTime) <= new Date()) && int.status == 'Completed' && int.metaData.feedbacks.interviewerFeedbackId == null;

    });


    pendingFeedback.forEach((int: Interview) => {
      var found = this.allCandidatesDb.find((cand: Candidate) => {
        return cand.metaData.interviewId == int.id;
      })
      res.pendingFeedback.push(found);
    })


    var pastInterviews =  this.allInterviewsDb.filter((int: Interview) => {
      return (new Date(int.dateTime) <= new Date()) && int.status == 'Completed' && int.metaData.feedbacks.interviewerFeedbackId != null;

    });

    console.log(pastInterviews);


    pastInterviews.forEach((int: Interview) => {
      var found = this.allCandidatesDb.find((cand: Candidate) => {
        return cand.metaData.interviewId == int.id;
      })
      res.pastInterviews.push(found);
    })

    console.log(res.pastInterviews);



    return res;
  }



}
