import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }

  getUsuariosRedesSociales() {
    const url = 'http://localhost:3000/grafica';
    return this.http.get(url);
  }

  getUsuariosRedesSocialesDonaData() {
    return this.getUsuariosRedesSociales()
    .pipe(
      delay(1500),
      map( data => {
        const labels = Object.keys(data);
        const values = Object.values(data);
        return {labels, values};
      })
    )
  }
}
