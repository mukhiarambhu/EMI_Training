import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookServiceService } from 'src/app/shared/service/book.service';
import { AuthService } from 'src/app/shared/service/auth.service';
import { UserService } from 'src/app/shared/service/user.service';
@Component({
  selector: 'app-user-landing',
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.css'],
})
export class UserLandingComponent implements OnInit {
  constructor(
    private bookService: BookServiceService,
    private active: ActivatedRoute,
    private route: Router,
  
  ) {}
  bookData!: any;
  search!: string;
  id!: number;
 
  ngOnInit(): void {
    this.getAllBook();
    
  }
  getAllBook() {
    this.bookService.getBook().subscribe({
      next: (res) => {
        this.bookData = res;
      },
    });
  }
 
}
