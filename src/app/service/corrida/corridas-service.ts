import { Injectable } from '@angular/core';
import { Corridas } from '../../modelos/corridas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CorridasService {
  
  constructor(private http: HttpClient) {}

  listarCorridas(): Observable<Corridas[]> {
    const UrlApi = 'https://6a835e4dcb486d243403a5ca.mockapi.io/corridas';
    return this.http.get<Corridas[]>(UrlApi);
  }

  listarCorrida(id: number): Observable<Corridas> {
    const UrlApi = `https://6a835e4dcb486d243403a5ca.mockapi.io/corridas/${id}`;
    return this.http.get<Corridas>(UrlApi);
  }

  salvarCorrida(corrida: Corridas): Observable<Corridas> {
    const UrlApi = `https://6a835e4dcb486d243403a5ca.mockapi.io/corridas/`;
    return this.http.post<Corridas>(UrlApi, corrida);
  }

  excluirCorrida(id: number): Observable<Corridas> {
    const UrlApi = `https://6a835e4dcb486d243403a5ca.mockapi.io/corridas/${id}`;
    return this.http.delete<Corridas>(UrlApi);
  }

  alterarCorrida(corrida: Corridas): Observable<Corridas> {
    const UrlApi = `https://6a835e4dcb486d243403a5ca.mockapi.io/corridas/${corrida.id}`;
    return this.http.put<Corridas>(UrlApi, corrida);
  }
}
/* private corrida: Corridas[] = [];

  addCorrida(corrida: Corridas) {
    corrida.id = this.corrida.length + 1;

    this.corrida.push(corrida);
  }

  ListCorrida(): Corridas[] {
    return this.corrida;
  }
}*/
