export interface Candidate {
  id: number;
  name: string;
  designation: string;
  company: string;
  exp: {
    min: string;
    max: string;
  };
  location: string;
  ctc: string;
  email: string;
  phoneNo: string;
  profilePicUrl: string;
  education: {
    fromYear: string;
    toYear: string;
    institute: string;
    course: string;
  }[];
  keySkills: string[];
  mayAlsoKnow: string[];
  socialProfiles: {
    linkedInUrl: string;
    gitHubUrl: string;
    webPortfolioUrl: string;
  };
  metaData: {
    jobId: number;
    fitAnalysis: {
      expScore: string;
      skillsScore: string;
      educationScore: string;
      overallFitScore: string;
    };
    interviewId: number;
  };
}
