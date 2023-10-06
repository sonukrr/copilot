import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../services/data-store.service';
import { combineLatest } from 'rxjs';
import { DbQueryService } from '../../services/db-query.service';
import { EventSettingsModel} from '@syncfusion/ej2-angular-schedule';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {


  allResponse : any
  completedInterview : any = []
  pendingInterview :any = []
  isClicked : boolean = false
  selectedJobId : any;
  isLoading : boolean = false

  questions : any = 
  [
      {
          "question": "Explain the importance of Selenium Testing in web application automation.",
          "difficulty": "High"
      },
      {
          "question": "Can you describe the key components of Selenium WebDriver and their roles?",
          "difficulty": "High"
      },
      {
          "question": "What is an object-relational mapping (ORM) and how does it relate to your role as an Automation Tester?",
          "difficulty": "High"
      },
      {
          "question": "How would you handle dynamic elements on a web page in Selenium testing?",
          "difficulty": "High"
      },
      {
          "question": "Give an example of a scenario where you would need to use Selenium Grid in your testing process.",
          "difficulty": "High"
      },
      {
          "question": "Explain the role of front-end technologies like JavaScript and HTML5 in Selenium testing.",
          "difficulty": "High"
      },
      {
          "question": "What are the advantages of using a Python framework like Django, Flask, or Pyramid in test automation?",
          "difficulty": "High"
      },
      {
          "question": "How do you handle test case synchronization issues in Selenium WebDriver?",
          "difficulty": "High"
      },
      {
          "question": "Describe your experience with Selenium IDE and its significance in test automation.",
          "difficulty": "High"
      },
      {
          "question": "What are the key challenges you've encountered in automated testing, and how did you overcome them?",
          "difficulty": "High"
      },
      {
          "question": "Can you explain the concept of version control, and which tools have you used for it in your projects?",
          "difficulty": "High"
      },
      {
          "question": "Give an example of a problem you've solved using your problem-solving skills in a team setting.",
          "difficulty": "High"
      },
      {
          "question": "How do you ensure the reliability and robustness of your automated test scripts?",
          "difficulty": "High"
      },
      {
          "question": "What experience do you have with Ruby on Rails, and how can it complement your skills as an Automation Tester?",
          "difficulty": "High"
      },
      {
          "question": "Explain how you would approach building an automated test suite from scratch for a web application.",
          "difficulty": "High"
      }
  ]

  jobInfo :boolean = true
  interview :boolean = false
  questionair :boolean = false
  blogs :boolean = false
  public selectedDate: Date = new Date(2023, 9, 15);
  public showWeekNumber: boolean = true;
  public isReadOnly: boolean = true;
  public eventSettings: EventSettingsModel = { dataSource: [
      {
          Id: 1,
          Subject: 'Explosion of Betelgeuse Star',
          StartTime: new Date(2023, 9, 11, 9, 30),
          EndTime: new Date(2023, 9, 11, 11, 0),
          CategoryColor: '#1aaa55'
      }, {
          Id: 2,
          Subject: 'Thule Air Crash Report',
          StartTime: new Date(2023, 9, 12, 12, 0),
          EndTime: new Date(2023, 9, 12, 14, 0),
          CategoryColor: '#357cd2'
      }, {
          Id: 3,
          Subject: 'Blue Moon Eclipse',
          StartTime: new Date(2023, 9, 13, 9, 30),
          EndTime: new Date(2023, 9, 13, 11, 0),
          CategoryColor: '#7fa900'
      }, {
          Id: 4,
          Subject: 'Meteor Showers in 2023',
          StartTime: new Date(2023, 9, 14, 13, 0),
          EndTime: new Date(2023, 9, 14, 14, 30),
          CategoryColor: '#ea7a57'
      }, {
          Id: 5,
          Subject: 'Milky Way as Melting pot',
          StartTime: new Date(2023, 9, 15, 12, 0),
          EndTime: new Date(2023, 9, 15, 14, 0),
          CategoryColor: '#00bdae'
      }, {
          Id: 6,
          Subject: 'Mysteries of Bermuda Triangle',
          StartTime: new Date(2023, 9, 15, 9, 30),
          EndTime: new Date(2023, 9, 15, 11, 0),
          CategoryColor: '#f57f17'
      }, {
          Id: 7,
          Subject: 'Glaciers and Snowflakes',
          StartTime: new Date(2023, 9, 16, 11, 0),
          EndTime: new Date(2023, 9, 16, 12, 30),
          CategoryColor: '#1aaa55'
      }, {
          Id: 8,
          Subject: 'Life on Mars',
          StartTime: new Date(2023, 9, 17, 9, 0),
          EndTime: new Date(2023, 9, 17, 10, 0),
          CategoryColor: '#357cd2'
      }, {
          Id: 9,
          Subject: 'Alien Civilization',
          StartTime: new Date(2023, 9, 19, 11, 0),
          EndTime: new Date(2023, 9, 19, 13, 0),
          CategoryColor: '#7fa900'
      }, {
          Id: 10,
          Subject: 'Wildlife Galleries',
          StartTime: new Date(2023, 9, 21, 11, 0),
          EndTime: new Date(2023, 9, 21, 13, 0),
          CategoryColor: '#ea7a57'
      }, {
          Id: 11,
          Subject: 'Best Photography 2023',
          StartTime: new Date(2023, 9, 22, 9, 30),
          EndTime: new Date(2023, 9, 22, 11, 0),
          CategoryColor: '#00bdae'
      }, {
          Id: 12,
          Subject: 'Smarter Puppies',
          StartTime: new Date(2023, 9, 9, 10, 0),
          EndTime: new Date(2023, 9, 9, 11, 30),
          CategoryColor: '#f57f17'
      }, {
          Id: 13,
          Subject: 'Myths of Andromeda Galaxy',
          StartTime: new Date(2023, 9, 7, 10, 30),
          EndTime: new Date(2023, 9, 7, 12, 30),
          CategoryColor: '#1aaa55'
      }, {
          Id: 14,
          Subject: 'Aliens vs Humans',
          StartTime: new Date(2023, 9, 6, 10, 0),
          EndTime: new Date(2023, 9, 6, 11, 30),
          CategoryColor: '#357cd2'
      }, {
          Id: 15,
          Subject: 'Facts of Humming Birds',
          StartTime: new Date(2023, 9, 20, 9, 30),
          EndTime: new Date(2023, 9, 20, 11, 0),
          CategoryColor: '#7fa900'
      }, {
          Id: 16,
          Subject: 'Sky Gazers',
          StartTime: new Date(2023, 9, 23, 11, 0),
          EndTime: new Date(2023, 9, 23, 13, 0),
          CategoryColor: '#ea7a57'
      }, {
          Id: 17,
          Subject: 'The Cycle of Seasons',
          StartTime: new Date(2023, 9, 12, 5, 30),
          EndTime: new Date(2023, 9, 12, 7, 30),
          CategoryColor: '#00bdae'
      }, {
          Id: 18,
          Subject: 'Space Galaxies and Planets',
          StartTime: new Date(2023, 9, 12, 17, 0),
          EndTime: new Date(2023, 9, 12, 18, 30),
          CategoryColor: '#f57f17'
      }, {
          Id: 19,
          Subject: 'Lifecycle of Bumblebee',
          StartTime: new Date(2023, 9, 15, 6, 0),
          EndTime: new Date(2023, 9, 15, 7, 30),
          CategoryColor: '#7fa900'
      }, {
          Id: 20,
          Subject: 'Sky Gazers',
          StartTime: new Date(2023, 9, 15, 16, 0),
          EndTime: new Date(2023, 9, 15, 18, 0),
          CategoryColor: '#ea7a57'
      }
  ]};

  constructor(
    public dbqService: DbQueryService,
    public dataStoreService: DataStoreService,
    private dataService: DataService,

  ) {
  }
  ngOnInit(): void {
    this.fetchInitialData()
  }

  fetchInitialData(){
    combineLatest({
      jobs: this.dbqService.getJobs(),
      candidates: this.dbqService.getCandidates(),
      interviews: this.dbqService.getInterviews(),
      
    }).subscribe({next : (response:any)=>{
  
      // this.isLoading = false
      this.allResponse = response

      console.log(response)
      
    },error: (err:any)=>{
      console.log(err)
    }})
  }

  getPendingInterview(id:any){
    let candidates : any = this.allResponse.jobs[id]?.metaData.candidateIds
    this.pendingInterview = []
    this.completedInterview = []
    candidates.forEach((cId:any) => {
        // console.log(this.allResponse.candidates[cId])
        let interview : any = this.allResponse.interviews[this.allResponse.candidates[cId].metaData.interviewId]
        if(interview.status == 'Pending')
          this.pendingInterview.push(this.allResponse.candidates[cId])
        else if(interview.status == 'Completed'){
          this.completedInterview.push(this.allResponse.candidates[cId])
        }
        // console.log(interview)
        // console.log(this.pendingInterview)

    });
  }

  getQuestionair(){
    this.isLoading = true
    let query:string = `prepare a set of 10-15 technical interview questions  
    for below mentioned job description, roles and responsibilities, 
    and the skills which is there for candidates inside a single 
    array in below mentioned \n 
    format:{question : question,difficulty: difficulty}
    \n ${JSON.stringify(this.allResponse.jobs[this.selectedJobId])}
    While preparing the technical questions, take both job details and candidate details into perspective.`

    this.dataService.chat(query).subscribe({next : (res:any)=>{
      console.log(res.choices[0].message.content)
      this.isLoading = false
      // this.startTypingEffect(res.choices[0].message.content)
    },error : (err:any) =>{
      console.log(err)
    }})
  }


  selectJob(id:any){
    this.selectedJobId= id;
    this.isClicked = true
    this.getPendingInterview(id)
  }

  goBack(){
    this.selectedJobId = 'id'  ;
    this.isClicked = false
  }

  jd(){
    this.jobInfo = true
    this.interview = false
    this.questionair = false
    this.blogs = false
  }

  int(){

    this.jobInfo = false
    this.interview = true
    this.questionair = false
    this.blogs = false
  }

  ques(){
    this.jobInfo = false
    this.interview = false
    this.questionair = true
    this.blogs = false
    setTimeout(() => {
      this.trialRemova()
    }, 1000);

  }


  trialRemova(){
    var badTableEval:any = document.evaluate (
      "//body/div[2]",
      document.documentElement,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
  );
  
  if (badTableEval  &&  badTableEval.singleNodeValue) {
      var badTable  = badTableEval.singleNodeValue;
      badTable.parentNode.removeChild (badTable);
  }
  }

  bart(){
    this.jobInfo = false
    this.interview = false
    this.questionair = false
    this.blogs = true
  }





  
}
