import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  name(name: any) {
    throw new Error('Method not implemented.');
  }
  users: any;
  isAuth = false;
  isAdmin = false;
  isUser = false;
  res: any;
  loginData: any;
  requiredName:string | undefined
  constructor(private http: HttpClient, private router: Router) {}

  //to authincate user
  public authenticateUser(data: any) { 
    return this.http.get('http://localhost:3000/users').subscribe((res) => {
      this.users = res;
      this.loginData = data;
      this.authUser();
      this.navigateUser();
    });
  }
  public authUser() {
    this.res = this.users.find((userInfo: any) => {
      return (
        userInfo.emailId == this.loginData.emailId &&
        userInfo.password == this.loginData.password
      );
    });
  }
  public navigateUser() {
    if (this.res) {
      this.checkRole();
    } else {
      alert('Invalid Credentials');
    }
  }
  public checkRole() {
    this.isAuth = true;
    if (this.res.role == 'admin') {
      this.isAdmin = true;
      this.isAuth = true;
      this.router.navigate(['admin']);
    } else if (this.res.role == 'user') {
      this.isUser = true;
      this.isAuth = true;
      this.router.navigate(['user']);
    } else {
      alert('Invalid user');
    }
  }
}
