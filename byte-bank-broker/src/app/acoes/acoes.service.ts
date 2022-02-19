import { Acao, Acoes, AcoesAPI } from './modelo/acoes';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AcoesService {

  constructor(private httpClient: HttpClient) { }

  getAcoes(valor?: string) {
    const params = valor ? new HttpParams().append('valor', valor) : undefined; 
    return this.httpClient.get<AcoesAPI>('http://localhost:3000/acoes', { params }).pipe(
    pluck('payload'),
    map((acoes) => acoes.sort((acaoA, acaoB) => {
          return this.ordenaPorCodigo(acaoA, acaoB);
        })
      )
    );
  }

  private ordenaPorCodigo(acaoA: Acao, acaoB: Acao) {
    if (acaoA.codigo > acaoB.codigo) {
      return 1;
    } 
    if (acaoA.codigo < acaoB.codigo) {
      return -1;
    } 
    return 0;
  }

}
