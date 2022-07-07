import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
interface bookModal {
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
}
