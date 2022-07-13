import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { AuthService } from 'src/app/shared/service/auth.service';
import { UserService } from 'src/app/shared/service/user.service';
@Component({
  selector: 'app-user-requested-book',
  templateUrl: './user-requested-book.component.html',
  styleUrls: ['./user-requested-book.component.css'],
})
export class UserRequestedBookComponent implements OnInit {
  requestedBookData: [];
  loggedInUserEmailId: string;
  constructor(private authService: AuthService,private userService:UserService) {}
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
   
    this.loggedInUserEmailId = this.authService.loginData.emailId;
    this.userService.getUsers().subscribe(res=>{
     res.map(el=>{
      if(el.emailId==this.loggedInUserEmailId){
       
       this.dataSource = new MatTableDataSource(el.bookIssued);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
      }
     })
    })
  }

  returnDate() {
    let todayDate = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    return todayDate + 3 + '-' + month + '-' + year;
  }
}
