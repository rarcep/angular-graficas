import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';
  colores: Color[] = [
    {
      backgroundColor: [
        '#0991E8',
        '#0AD7F2',
        '#13DBBA',
        '#0AF287',
        '#09EB41',
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
