import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface booksResponse{
  id:number
  bookName:string
  authorName:string
  bookCategory:string
  pic:string
  bookQuantity:number
}
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
 public postBook(data:any):Observable<booksResponse[]>{
    return this.http.post<booksResponse[]>('http://localhost:3000/books',data)

  }

 public getBook():Observable<booksResponse[]>{
    return this.http.get<booksResponse[]>('http://localhost:3000/books')
  }
}
