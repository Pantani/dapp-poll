import { AfterViewInit, Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-poll-vote',
  templateUrl: './poll-vote.component.html',
  styleUrls: ['./poll-vote.component.sass'],
})
export class PollVoteComponent implements AfterViewInit {
  @Input() voted: boolean;
  @Input() options: string[];
  @Input() results: number[];
  @Input() question: string;

  voteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.voteForm = this.fb.group({
      selected: this.fb.control('', [Validators.required]),
    });
  }

  ngAfterViewInit(): void {
    if (this.voted) {
      this.generateCharts();
    }
  }

  submitForm() {
    console.log(this.voteForm.value);
  }

  generateCharts() {
    console.log(this.question);
    console.log(this.results);

    const options = {
      series: [
        {
          name: this.question,
          data: this.results,
        },
      ],
      chart: {
        type: 'bar',
      },
      xaxis: {
        categories: this.options,
      },
    };
    const chart = new ApexCharts(
      document.getElementById('poll-results'),
      options
    );
    chart.render();
  }
}
