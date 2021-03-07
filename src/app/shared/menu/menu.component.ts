import { Component, OnInit } from '@angular/core';

interface MenuItem {
  ruta: string;
  nombre: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: MenuItem[] =  [
    {
      ruta: '/graficas/barras',
      nombre: 'Grafica de Barras'
    },
    {
      ruta: '/graficas/grafica-doble',
      nombre: 'Graficas Dobles'
    },
    {
      ruta: '/graficas/dona',
      nombre: 'Grafica de Donas'
    },
    {
      ruta: '/graficas/dona-http',
      nombre: 'Grafica Dona API'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
