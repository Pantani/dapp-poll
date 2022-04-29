import { Component } from '@angular/core';
import { PollService } from './poll-service/poll.service';
import { Poll } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
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
}
