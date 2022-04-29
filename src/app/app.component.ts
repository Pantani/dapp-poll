import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  showForm = false;
  polls = [
    {
      question: 'Do you like cats, dogs or birds',
      votes: [0, 5, 6],
      voted: true,
      image:
        'https://uploads.mwp.mprod.getusinfo.com/uploads/sites/29/2021/08/Screen-Shot-2021-08-16-at-5.37.50-AM.png',
    },
    {
      question: 'Do you like human, aliens or animals?',
      votes: [0, 2, 3],
      voted: false,
      image:
        'https://d2v9ipibika81v.cloudfront.net/uploads/sites/72/431539-PE9O1K-661-1140x684.jpg',
    },
  ];
}
