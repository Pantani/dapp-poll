import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PollCreateComponent } from './poll-create/poll-create.component';
import { PollListComponent } from './poll-list/poll-list.component';
import { PollVoteComponent } from './poll-vote/poll-vote.component';

@NgModule({
  declarations: [
    AppComponent,
    PollCreateComponent,
    PollListComponent,
    PollVoteComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
