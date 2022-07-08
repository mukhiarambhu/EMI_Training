import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';
import { UserService } from 'src/app/shared/service/user.service';
@Component({
  selector: 'app-user-info-dropdown',
  templateUrl: './user-info-dropdown.component.html',
  styleUrls: ['./user-info-dropdown.component.css']
})
export class UserInfoDropdownComponent implements OnInit {
email!:string
userdata!:{}
  constructor(private authService:AuthService,private userService:UserService) { }

  ngOnInit(): void {
  this.email=this.authService.loginData.emailId
  console.log(this.email)
  //  console.log(this.authService.loginData)
  this.userService.getUsers().subscribe({
    next:(res=>{
      res.map(el=>{
        if(el.emailId==this.email){
          this.userdata=el
          console.log(this.userdata)
          this.saveData()
        }
      })
    })
  })

  }

  saveData(){
    sessionStorage.setItem('name', 'Rana Hasnain')
  }
}
