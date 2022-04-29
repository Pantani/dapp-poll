import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.sass'],
})
export class PollListComponent implements OnInit {
  @Input() question: string;
  @Input() votes: number[];
  @Input() voted: boolean;
  @Input() pollImage: string;

  numberOfVotes: number;

  ngOnInit(): void {
    if (this.votes.length) {
      this.numberOfVotes = this.votes.reduce((acc, curr) => {
        return (acc += curr);
      });
    }
  }
}
