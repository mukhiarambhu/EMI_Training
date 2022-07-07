import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { SignupModalComponent } from '../signup-modal/signup-modal.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/service/auth.service';
@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css'],
})
export class LoginModalComponent implements OnInit {
  loginData!: FormGroup;
  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private dialogeRef:MatDialogRef<LoginModalComponent>
  ) {}

  ngOnInit(): void {
    this.loginData = this.formBuilder.group({
      emailId: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  validateUser() {
    if (this.loginData.valid) {
      this.authService.authenticateUser(this.loginData.value);
      this.dialogeRef.close('save')
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(SignupModalComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
