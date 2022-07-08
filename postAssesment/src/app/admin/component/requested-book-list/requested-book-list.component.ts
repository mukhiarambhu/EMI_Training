import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-requested-book-list',
  templateUrl: './requested-book-list.component.html',
  styleUrls: ['./requested-book-list.component.css'],
})
export class RequestedBookListComponent implements OnInit {
  constructor() {}
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
    this.getData();
  }

  getData() {
    let bookDataFromStorage = JSON.parse(localStorage.getItem('requestedBook'));
    this.dataSource = new MatTableDataSource(bookDataFromStorage);
    console.log(this.dataSource);
  }
}
