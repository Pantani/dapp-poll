import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Web3Service } from '../blockchain/web3.service';
import { Poll, PollForm } from '../types';
import { fromAscii } from 'web3-utils';

@Injectable({
  providedIn: 'root',
})
export class PollService {
  constructor(private web3: Web3Service) {}

  getPolls(): Observable<Poll[]> {
    return of([
      {
        id: 1,
        question: 'What is your best animal?',
        results: [25, 100, 2],
        options: ['cats', 'dogs', 'birds'],
        thumbnail:
          'https://uploads.mwp.mprod.getusinfo.com/uploads/sites/29/2021/08/Screen-Shot-2021-08-16-at-5.37.50-AM.png',
        voted: true,
      },
      {
        id: 2,
        question: 'Do you like humans, aliens or animals?',
        results: [0, 24, 39],
        options: ['homans', 'aliens', 'animals'],
        thumbnail:
          'https://d2v9ipibika81v.cloudfront.net/uploads/sites/72/431539-PE9O1K-661-1140x684.jpg',
        voted: false,
      },
    ]);
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
}
