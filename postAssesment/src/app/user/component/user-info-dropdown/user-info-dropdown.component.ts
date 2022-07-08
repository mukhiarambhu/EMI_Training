import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';
import { UserService } from 'src/app/shared/service/user.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-user-info-dropdown',
  templateUrl: './user-info-dropdown.component.html',
  styleUrls: ['./user-info-dropdown.component.css']
})
export class UserInfoDropdownComponent implements OnInit {
email!:string
userdata!:{}
name!:string
  constructor(private authService:AuthService,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  this.email=this.authService.loginData.emailId
    if(this.authService.isAuth){
      this.userService.getUsers().subscribe({
        next:(res=>{
          res.map(el=>{
            if(el.emailId==this.email){
              this.userdata=el
              this.name=el.UserName
            
            }
          })
        })
      })
    }
 }

 public logOut(){
  this.authService.isAuth=false
 this.router.navigateByUrl('')
 }

 
}
