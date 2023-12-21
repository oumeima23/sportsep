import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userUrl:string="http://localhost:3000/users"

  constructor(private httpClient :HttpClient) {}

  addUser(obj){
    return this.httpClient.post<{msg:any}>(this.userUrl,obj);
  }

signup(user:any,img:File){
  let fData= new FormData();
  fData.append("firstName",user.firstName);
  fData.append("lastName",user.lastName);
  fData.append("email",user.email);
  fData.append("password",user.password);
  fData.append("tel",user.tel);
  fData.append("role",user.role);
  fData.append("img",img);

 return this.httpClient.post<{msg:any}>(`${this.userUrl}/signup`,fData);
}


login(user:any){
  return this.httpClient.post<{msg:string, token:any}>(`${this.userUrl}/login`,user);

 }

}
