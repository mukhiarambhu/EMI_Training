import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { UserService } from 'src/app/shared/service/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.css']
})
export class SignupModalComponent implements OnInit {
  
  userForm!:FormGroup
  
  constructor(public dialog: MatDialog,private dialogeRef:MatDialogRef<SignupModalComponent>, private userService:UserService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.userForm=this.formBuilder.group({
      UserName:['',Validators.required],
      emailId:['',Validators.required],
      password:['',Validators.required],
      number:['',Validators.required],
      gender:['',Validators.required],
      role:['user'],
      bookIssued:[[]]
    }) 
    
  }
 
  addUsers(){
    if(this.userForm.valid){
      this.userService.postUser(this.userForm.value).subscribe({
        next:(res)=>{
          alert('New User has been Added ')
          this.userForm.reset()
          this.dialogeRef.close('save')
        },error:()=>{
          alert('Error! Fill all details')
        }
      })
      console.log(this.userForm.value)
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
