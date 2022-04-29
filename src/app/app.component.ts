import { Component } from '@angular/core';
import { Poll } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  showForm = false;
  activePoll: Poll = null;
  polls: Poll[] = [
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
  ];

  setActivePoll(poll: Poll) {
    this.activePoll = null;
    setTimeout(() => {
      this.activePoll = poll;
    }, 100);
  }
}
