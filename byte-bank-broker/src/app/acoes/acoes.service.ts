import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcoesService {

  constructor(private httpClient: HttpClient) { }

  getAcoes(): Observable<any>{
    return this.httpClient.get<any>('http://localhost:3000/acoes');
  }

}
