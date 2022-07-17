import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { BookServiceService } from 'src/app/shared/service/book.service';
@Component({
  selector: 'app-requsted-book-list',
  templateUrl: './requsted-book-list.component.html',
  styleUrls: ['./requsted-book-list.component.css'],
})
export class RequstedBookListComponent implements OnInit {
  constructor(public bookService: BookServiceService) {}
  bookData: any;
  displayedColumns: string[] = [
    'bookName',
    'authorName', 
    'bookCategory',
    'bookQuantity',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
    this.getAllBook();
  }

  public getAllBook() {
    this.bookService.getRequestedBook().subscribe({
      next: (res) => {
        this.bookData = res;
        this.dataSource = new MatTableDataSource(this.bookData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        // console.log(res);
      },
      error: () => {
        alert('oops! Error Occured');
      },
    });
  }

  IssueBook(data: any) {
    this.bookService.postIssuedBook(data).subscribe({
      next: (res) => {
        alert('Book Issued');
        this.deleteRequestedBook(data.id);
      
      },
      error: () => {
        alert('oops couldnot issue book');
      },
    });
  }

  deleteRequestedBook(id: number) {
    this.bookService.deleteRequestedBook(id).subscribe({
      next: () => {
        console.log('deleted book');
      },
      error: () => {
        console.log('oops couldnot delte');
      },
    });
  }
}
