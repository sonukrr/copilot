export interface Job {
  id: number;
  title: string;
  location: string;
  description: string;
  rolesAndResp: string;
  mandatorySkills: string[];
  desirableSkills: string[];
  designation: string;
  exp: {
    min: string;
    max: string;
  };
  evaluationCriteria: string;
  skillsToBEEvaluatedOn: string;
  metaData: {
    candidateIds: number[];
    jobQuestionareIds: number[];
  };
}
