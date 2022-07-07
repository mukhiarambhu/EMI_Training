import { Component, OnInit } from '@angular/core';
import { AddBookComponent } from '../add-book/add-book.component';
import { MatDialog } from '@angular/material/dialog'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showFiller = false;
  constructor(public dialog: MatDialog, public router:Router) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddBookComponent);

    dialogRef.afterClosed();
  }
 public routePath(){
  this.router.navigateByUrl('userlist')
 }
}
