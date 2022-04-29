import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Poll } from '../types';

@Injectable({
  providedIn: 'root',
})
export class PollService {
  constructor() {}

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
    console.log(pollID, voteNumber);
  }

  createPoll(question: string, thumbnail: string, options: string[]) {
    console.log(question, thumbnail, options);
  }
}
