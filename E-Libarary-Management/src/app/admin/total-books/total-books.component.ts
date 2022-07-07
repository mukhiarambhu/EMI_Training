import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../services/book.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-total-books',
  templateUrl: './total-books.component.html',
  styleUrls: ['./total-books.component.css'],
})
export class TotalBooksComponent implements OnInit {
  bookData: any;
  displayedColumns: string[] = [
    
    'bookName',
    'authorName',
    'bookCategory',
    'bookQuantity',
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getAllBook()
  }
  public getAllBook() {
    this.bookService.getBook().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(res)
      },
      error: () => {
        alert('oops! Error Occured');
      },
    });
  }

  
}
