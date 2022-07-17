import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginModalComponent } from 'src/app/user/component/login-modal/login-modal.component';
import { SignupModalComponent } from 'src/app/user/component/signup-modal/signup-modal.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  openDialog() {
    const dialogRef = this.dialog.open(LoginModalComponent);
    dialogRef.afterClosed();
  }

  openDialog1() {
    const dialogRef = this.dialog.open(SignupModalComponent);

    dialogRef.afterClosed();
  }
}
