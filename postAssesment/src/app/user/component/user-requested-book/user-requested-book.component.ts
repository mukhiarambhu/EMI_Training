import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-user-requested-book',
  templateUrl: './user-requested-book.component.html',
  styleUrls: ['./user-requested-book.component.css'],
})
export class UserRequestedBookComponent implements OnInit {
  requestedBookData: [];
  constructor() {}
  displayedColumns: string[] = [
    'bookName',
    'authorName',
    'bookCategory',
    'bookQuantity',
    'returnDate',
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
    this.getData();
    this.returnDate();
  }

  getData() {
    let bookDataFromStorage = JSON.parse(localStorage.getItem('requestedBook'));
    // for(let i=bookDataFromStorage.length-1;i<bookDataFromStorage.length-4;i--){
    //   console.log(bookDataFromStorage[i])
    // }
    this.dataSource = new MatTableDataSource(bookDataFromStorage);
    // console.log(this.dataSource)
  }

  returnDate() {
    let todayDate = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    return todayDate + 3 + '-' + month + '-' + year;
  }
}
