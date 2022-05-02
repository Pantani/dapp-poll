import { Injectable } from '@angular/core';
import { Web3Service } from '../blockchain/web3.service';
import { Poll, PollForm, Voter } from '../types';
import { fromAscii, toAscii } from 'web3-utils';

@Injectable({
  providedIn: 'root',
})
export class PollService {
  constructor(private web3: Web3Service) {}

  async getPolls(): Promise<Poll[]> {
    const acc = await this.web3.getAccount();
    const voter = await this.web3.call('getVoter', acc);
    const voterNormalized = this.normalizeVoter(voter);

    const polls: Poll[] = [];
    const totalPolls = await this.web3.call('getTotalPolls');
    for (let i = 0; i < totalPolls; i++) {
      const pollRaw = await this.web3.call('getPoll', i);
      const pollNormalized = this.normalizePoll(pollRaw, voterNormalized);
      polls.push(pollNormalized);
    }
    return polls;
  }

  vote(pollID: number, voteNumber: number) {
    this.web3.executeTransaction('vote', pollID, voteNumber);
  }

  createPoll(poll: PollForm) {
    this.web3.executeTransaction(
      'createPoll',
      poll.question,
      poll.thumbnail || '',
      poll.options.map((opt) => fromAscii(opt))
    );
  }

  private normalizeVoter(voter: any[]): Voter {
    return {
      id: voter[0],
      voted: voter[1].map((vote: any) => parseInt(vote)),
    };
  }

  private normalizePoll(pollRaw: any[], voter: Voter): Poll {
    return {
      id: parseInt(pollRaw[0]),
      question: pollRaw[1],
      thumbnail: pollRaw[2],
      results: pollRaw[3].map((vote: any) => parseInt(vote)),
      options: pollRaw[4].map((opt: any) => toAscii(opt)),
      voted:
        voter.voted.length &&
        voter.voted.find((votedId) => votedId === parseInt(pollRaw[0])) !=
          undefined,
    };
  }
}
