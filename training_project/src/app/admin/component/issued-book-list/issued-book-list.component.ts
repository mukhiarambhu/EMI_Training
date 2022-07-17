import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { BookServiceService } from 'src/app/shared/service/book.service';
@Component({
  selector: 'app-issued-book-list',
  templateUrl: './issued-book-list.component.html',
  styleUrls: ['./issued-book-list.component.css']
})
export class IssuedBookListComponent implements OnInit {

  constructor(public bookService: BookServiceService) { }
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
  ngOnInit(): void {
    this.getAllBook()
  }

  public getAllBook() {
    this.bookService.getIssuedBook().subscribe({
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
}
