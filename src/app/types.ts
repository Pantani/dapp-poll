export interface Poll extends PollForm {
  id: number;
  results: number[];
  voted: boolean;
}

export interface Voter {
  id: string;
  voted: number[];
}

export interface PollForm {
  question: string;
  options: string[];
  thumbnail: string;
}

export interface PollVote {
  id: number;
  vote: number;
}
