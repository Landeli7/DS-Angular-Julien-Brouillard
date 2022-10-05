import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resto } from '../dto/resto.dto';
import { Evaluation } from '../dto/resto.dto';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  constructor(private httpClient: HttpClient) { } //On peut faire this.httpClient

  public getRestos(): Observable<Resto[]> {
    return this.httpClient.get<Resto[]>('http://localhost:8080/restaurants'); //service.getRestos().subscribe((response => {}) à mettre dans le component
  }

  public updateRestoById(Id: number, nom: string, adresse: string): Observable<Resto> {
    return this.httpClient.put<Resto>('http://localhost:8080/restaurants/' + Id, {nom: nom, adresse: adresse}); //service.getRestos().subscribe((response => {}) à mettre dans le component
  }

  public getRestoById(Id: number): Observable<Resto> {
    return this.httpClient.get<Resto>('http://localhost:8080/restaurants/' + Id); //service.getRestos().subscribe((response => {}) à mettre dans le component
  }

  public createResto(nom: string, adresse: string): Observable<Resto> {
    return this.httpClient.post<Resto>('http://localhost:8080/restaurants', {nom: nom, adresse: adresse});
  }

  public createEval(Id: number, evaluateur: string, commentaire: string, note: number): Observable<Evaluation> {
    return this.httpClient.post<Evaluation>('http://localhost:8080/restaurants/' + Id + '/evaluations', {
      evaluateur: evaluateur, commentaire: commentaire, note: note});
  }

  public deleteEval(restoId: number, evalId: number): Observable<void> {
    return this.httpClient.delete<void>('http://localhost:8080/restaurants/' + restoId + "/evaluations/" + evalId);
  }

}
