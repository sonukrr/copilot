import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '../models/job';
import { Candidate } from '../models/candidate';
import { Interview } from '../models/interview';

@Injectable({
  providedIn: 'root'
})
export class DbQueryService {


  constructor(private http: HttpClient) {}

  getJobs() {
    let dataUrl = 'assets/db/jobs.json'; // Path to your JSON file
    return this.http.get<Job[]>(dataUrl);
  }

  getCandidates() {
    let dataUrl = 'assets/db/candidates.json'; // Path to your JSON file
    return this.http.get<Candidate[]>(dataUrl);
  }

  getInterviews() {
    let dataUrl = 'assets/db/interviews.json'; // Path to your JSON file
    return this.http.get<Interview[]>(dataUrl);
  }

  getInterviewerFeedback() {
    let dataUrl = 'assets/db/interviewerFeedbacks.json'; // Path to your JSON file
    return this.http.get<Job[]>(dataUrl);
  }

  getCandidateFeedback() {
    let dataUrl = 'assets/db/candidateFeedbacks.json'; // Path to your JSON file
    return this.http.get<Job[]>(dataUrl);
  }

  getJobQuestionare() {
    let dataUrl = 'assets/db/jobQuestionare.json'; // Path to your JSON file
    return this.http.get<Job[]>(dataUrl);
  }


}
