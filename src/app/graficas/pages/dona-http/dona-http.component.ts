import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: Label[] = [
    /* 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' */
  ];
  public doughnutChartData: MultiDataSet = [
    /* [350, 450, 100] */
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

  constructor(private graficaService: GraficasService) { }

  ngOnInit(): void {
    /* this.graficaService.getGraficaData()
    .subscribe(data => {
      const labels = Object.keys(data);
      const values = Object.values(data);
      this.doughnutChartLabels = labels;
      this.doughnutChartData.push(values);
    }); */

    this.graficaService.getUsuariosRedesSocialesDonaData()
      .subscribe( ({labels, values}) => {
        console.log(labels);
        console.log(values);
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
      });
  }

}
