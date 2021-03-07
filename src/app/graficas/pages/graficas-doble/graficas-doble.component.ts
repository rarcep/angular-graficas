import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-graficas-doble',
  templateUrl: './graficas-doble.component.html',
  styleUrls: ['./graficas-doble.component.css']
})
export class GraficasDobleComponent implements OnInit {

  proveedoresData: ChartDataSets[] = [
    { data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
    { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
  ];

  proveedoresLabels: string[] = ['2021', '2022','2023','2024','2025'];

  productoData: ChartDataSets[] = [
    { data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: 'blue' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
