import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchServices {
  matchUrl:string="http://localhost:3000/matches"

  constructor(private httpClient: HttpClient) {}

  //méthode du services pour envoyer l'obj tapé par l'utilisateur à la partie BE
  addMatch(obj){
    return this.httpClient.post<{msg:any}>(this.matchUrl,obj);
  }

// requet = récupérer tous le tableau d'objets 
  getAllMatches(){
    return this.httpClient.get<{matchesTab:any,msg:any}>(this.matchUrl);
  }

  //request= récupérer un seul obj by Id
  getMatchById(id){
    return this.httpClient.get<{findedMatch:any}>(`${this.matchUrl}/${id}`);
  }

  //request = modifier un objet 
  updateMatch(obj){
    return this.httpClient.put<{msg:string}>(this.matchUrl,obj);
  }

  //request = supprimer un obj by Id 
  deleteMatch(id){
    return this.httpClient.delete<{message:any}>(`${this.matchUrl}/${id}`);
  }

  searchMatch(obj){
    return this.httpClient.post<{msg:boolean, SOne:any, STwo:any}>(`${this.matchUrl}/search`,obj);
  }

  
}
