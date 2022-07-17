import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent implements OnInit {
  userName: string;
  email!: string;
  userdata!: {};
  constructor(private authService: AuthService,private userService:UserService) {}

  ngOnInit(): void {
    this.getUserName()
  }
  getUserName() {
    this.email = this.authService.loginData.emailId;
    if (this.authService.isAuth) {
      this.userService.getUsers().subscribe({
        next: (res) => {
          res.map((el) => {
            if (el.emailId == this.email) {
              this.userdata = el;
              this.userName = el.UserName;
            }
          });
        },
      });
    }
  }
}
