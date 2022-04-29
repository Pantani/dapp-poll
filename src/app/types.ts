export interface Pool {
  id: number;
  question: string;
  results: string[];
  options: string[];
  thumbnail: string;
}

export interface Voter{
  id: string;
  voted: number[];
}

