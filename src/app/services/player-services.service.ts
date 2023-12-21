import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerUrl:string="http://localhost:3000/players"

  constructor(private httpClient :HttpClient) {}
    //méthode du services pour envoyer l'obj tapé par l'utilisateur à la partie BE
  addPlayer(obj){
  return this.httpClient.post<{msg:string}>(this.playerUrl,obj);
  }
// requet = récupérer tous le tableau d'objets 
  getAllPlayers(){
    return this.httpClient.get<{playersTab:any,msg:any}>(this.playerUrl);
  }
  //request= récupérer un seul obj by Id
  getPlayerById(id){
    return this.httpClient.get<{findedPlayer:any}>(`${this.playerUrl}/${id}`);
  }
  //request = modifier un objet 
  updatePlayer(obj){
    return this.httpClient.put(`${this.playerUrl}/${obj.id}`,obj);
  }
  //request = supprimer un obj by Id 
  deletePlayer(id){
    return this.httpClient.delete<{message:any}>(`${this.playerUrl}/${id}`);
  }

  
}
