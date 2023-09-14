export interface Interview {
  id: number;
  dateTime: string; // This can be of type Date if desired
  status: "Pending" | "Completed" | "Due";
  provider: "MS Teams" | "Google Meet" | "Zoom";
  meetingUrl: string;
  videoAndTranscriptUrl: string;
  metaData: {
    jobId: number;
    candidateId: number;
    feedbacks: {
      interviewerFeedbackId: number;
      candidateFeedbackId: number;
    };
  };
}
