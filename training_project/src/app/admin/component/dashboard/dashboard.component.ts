import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import { Router } from '@angular/router';
import { AddBookModalComponent } from '../add-book-modal/add-book-modal.component';
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
    const dialogRef = this.dialog.open(AddBookModalComponent);

    dialogRef.afterClosed();
  }

}
