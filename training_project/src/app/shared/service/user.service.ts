import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface usersModel{
 
  id:number,
  UserName:string,
  emailId:string,
  password:string,
  number:number,
  gender:string,
  role:string,
  bookIssued:any[]
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient) { }
 
  public postUser(data:any):Observable<usersModel[]>{
    return this.http.post<usersModel[]>('http://localhost:3000/users',data)
  }

  public getUsers():Observable<usersModel[]>{
    return this.http.get<usersModel[]>('http://localhost:3000/users')
  }
  public getUsersById(id:number):Observable<usersModel>{
    return this.http.get<usersModel>(`http://localhost:3000/users/${id}`)
  }

  public updateUser(id:any,data:any):Observable<usersModel>{
    return this.http.patch<usersModel>(`http://localhost:3000/users/${id}`,data)
  }
 
}
