import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamServicesService {
  teamUrl:string="http://localhost:3000/teams"

  constructor(private httpClient :HttpClient ) { }
  
  //méthode du services pour envoyer l'obj tapé par l'utilisateur à la partie BE
  addTeam(obj){
    return this.httpClient.post<{msg:string}>(this.teamUrl,obj);
  }

// requet = récupérer tous le tableau d'objets 
  getAllTeams(){
    return this.httpClient.get<{teamsTab:any,msg:any}>(this.teamUrl);
  }

  //request= récupérer un seul obj by Id
  getTeamById(id){
    return this.httpClient.get<{findedTeam:any}>(`${this.teamUrl}/${id}`);
  }
  //request = modifier un objet 
  updateTeam(obj){
    return this.httpClient.put<{msg:string}>(this.teamUrl,obj);
  }

  //request = supprimer un obj by Id 
  deleteTeam(id){
    return this.httpClient.delete<{message:any}>(`${this.teamUrl}/${id}`);
  }
  
}

