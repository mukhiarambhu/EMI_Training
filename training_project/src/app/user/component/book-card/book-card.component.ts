import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/service/auth.service';
import { UserService } from 'src/app/shared/service/user.service';
import { BookServiceService } from 'src/app/shared/service/book.service';
@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent implements OnInit {
  @Input()
  bookData!: any;
  @Input() searchTerm!: string;
  count: number = 0;
  loggedInuserEmailId: string;
  userData: any;
  loggedInUserId: number;
  bookrequested: any[] = [];
  constructor(
    private bookService: BookServiceService,
    private toastr: ToastrService,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUserInfo();
   
    
  }
  getDetails(val: any) {
   
    if (this.userData.bookIssued.length < 3) {
      
      this.bookService.getBookById(val).subscribe((res) => {
        this.bookrequested.push(res);
        this. sendRequestedData(res)
        this.userService.getUsersById(this.loggedInUserId).subscribe((res) => {
          this.userData.bookIssued = this.bookrequested;
          this.updateUser(this.loggedInUserId, this.userData);
          this.toastr.success(
            'Book has been requested for Issue',
            `Hello,${this.userData.UserName}`
          );
        });
      });
    } else {
      this.toastr.success(
        'You cannot request more than 3 books',
        `Hello,${this.userData.UserName}`
      );
    }
  }
  getUserInfo() {
    // console.log(this.authService.loginData, 'id');
    this.loggedInuserEmailId = this.authService.loginData.emailId;

    this.userService.getUsers().forEach((res) => {
      res.map((el) => {
        if (el.emailId == this.loggedInuserEmailId) {
          this.userData = el;
          this.loggedInUserId = el.id;
          // console.log(this.userData);
          // console.log(this.loggedInUserId);
        }
      });
    });
  }
  updateUser(id: any, data: any) {
    this.userService.updateUser(id, data).subscribe((res) => {
      // console.log(res);
    });
  }
  sendRequestedData(data:any){
    
    this.bookService.postRequestedBook(data).subscribe({
      next:(res)=>{
        // console.log('book added')
      }
    })
    
  }
}
