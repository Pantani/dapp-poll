import { Component, OnInit } from '@angular/core';
import { PollService } from './poll-service/poll.service';
import { Poll, PollForm, PollVote } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  showForm = false;
  activePoll: Poll = null;
  polls = this.ps.getPolls();

  constructor(private ps: PollService) {}

  setActivePoll(poll: Poll) {
    this.activePoll = null;
    setTimeout(() => {
      this.activePoll = poll;
    }, 100);
  }

  ngOnInit(): void {
    this.ps.onEvent('PollCreated').subscribe(() => {
      this.polls = this.ps.getPolls();
      this.showForm = false;
    });
  }

  handlePollCreate(poll: PollForm) {
    this.ps.createPoll(poll);
  }

  handlePollVote(pollVoted: PollVote) {
    this.ps.vote(pollVoted.id, pollVoted.vote);
  }
}
