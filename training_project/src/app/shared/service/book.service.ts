import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
interface bookModal {
  [x: string]: any;
  bookName: string;
  authorName: string;
  bookImage: string;
  bookCategory: string;
  bookQuantity: number;
  id: number;
}
@Injectable({
  providedIn: 'root',
})
export class BookServiceService {
  constructor(private http: HttpClient) {}

  public postBook(data: any): Observable<bookModal[]> {
    return this.http.post<bookModal[]>('http://localhost:3000/books', data);
  }
  public getBook(): Observable<bookModal[]> {
    return this.http.get<bookModal[]>('http://localhost:3000/books');
  }

  public getBookById(id: number): Observable<bookModal> {
    return this.http.get<bookModal>(`http://localhost:3000/books/${id}`);
  }

  public deleteBook(id:number):Observable<bookModal>{
    return this.http.delete<bookModal>(`http://localhost:3000/books/${id}`)
  }

  public editBook(id:number,book:any):Observable<bookModal>{
    return this.http.patch<bookModal>(`http://localhost:3000/books/${id}`,book)
  }

  public getRequestedBook():Observable<bookModal>{
    return this.http.get<bookModal>('http://localhost:3000/requestedbook')
  }

  public postRequestedBook(data: any) {
    return this.http.post('http://localhost:3000/requestedbook', data);
  }

  public deleteRequestedBook(id:number):Observable<bookModal>{
    return this.http.delete<bookModal>(`http://localhost:3000/requestedbook/${id}`)
  }

  public getIssuedBook():Observable<bookModal>{
    return this.http.get<bookModal>('http://localhost:3000/issuedbook')
  }
  public postIssuedBook(data: any) {
    return this.http.post('http://localhost:3000/issuedbook', data);
  }
}
