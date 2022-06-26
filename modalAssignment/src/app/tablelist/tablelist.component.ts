import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { BookServiceService } from '../services/book-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-tablelist',
  templateUrl: './tablelist.component.html',
  styleUrls: ['./tablelist.component.css'],
})
export class TablelistComponent implements OnInit{
  bookData: any;
  displayedColumns: string[] = ['bookName', 'authorName', 'bookCategory', 'bookQuantity','description'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private bookService: BookServiceService) {}

  ngOnInit(): void {
    this.getallBook();
  }

  getallBook() {
    this.bookService.getBook().subscribe({
      next: (res) => {
        this.dataSource= new MatTableDataSource(res)
        this.dataSource.paginator=this.paginator
        this.dataSource.sort=this.sort
      },
      error: () => {
        alert('Error! Fill details Correctly');
      },
    });
  }
}
