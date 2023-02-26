import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit, OnChanges {

  @Input() mode = 'dark'
  tempMode: string = ''

  config : any;

  softSkill = [
    {name: 'TEAM WORKING', icon: 'bi bi-people'},
    {name: 'PROBLEM SOLVING', icon: 'bi bi-lightbulb'},
    {name: 'WILLIGNESS TO LEARN', icon: 'bi bi-book'},
    {name: 'PERSISTENCE', icon: 'bi bi-bricks'},
    {name: 'EMPATHY', icon: 'bi bi-heart'},
  ]

  interest = [
    {name: 'ARTIFICIAL INTELLIGENCE', icon: 'bi bi-robot'},
    {name: 'GREEN ENERGY', icon: 'bi bi-recycle'},
    {name: 'BLOCKCHAIN', icon: 'bi bi-diagram-2-fill'},
    {name: 'CRYPTOCURRENCIES', icon: 'bi bi-currency-bitcoin'},
  ]

  ngOnChanges(changes: SimpleChanges): void {
    if (changes){
      if (this.mode !== this.tempMode){
        this.generateChart();
        this.tempMode = this.mode
      }
    }
  }

  ngOnInit(): void {
    this.mode = this.tempMode
    this.generateChart();
  }

  generateChart(){
    let primary
    let bg
    let line

    if (this.mode === 'dark'){
      primary = '#8079f0';
      bg = 'rgb(128, 121, 240, 0.5)';
      line = '#d7d7d7';
    }else {
      primary = '#f84f63';
      bg = 'rgb(248, 79, 99, 0.5)';
      line = '#353537';
    }
    this.config = {
      datasets: [{
        fill: true,
        backgroundColor: bg,
        borderColor: primary,
        pointBackgroundColor: primary,
        pointBorderColor: line,
        pointHoverBackgroundColor: line,
        pointHoverBorderColor: primary,
        data: [8,7,8,7,7,9]
      }],
      options: {
        plugins: {
          tooltip: {
            enabled: false
          }
        },
        responsive: true,
        scales: {
          r: {
            grid: {
              color: line
            },
            min: 0,
            max: 10,
            ticks: {
              stepSize: 1,
              display: false,
            },

          }
        }
      },
      labels : ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Angular', 'Git']
    }
  }

}
