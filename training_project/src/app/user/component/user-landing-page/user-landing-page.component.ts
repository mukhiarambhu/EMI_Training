import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/shared/service/book.service';

@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.css']
})
export class UserLandingPageComponent implements OnInit {
  bookData!: any;
  search!: string;
  id!: number;
  constructor(private bookService: BookServiceService,) { }

  ngOnInit(): void {
    this.getAllBook()
  }
  getAllBook() {
    this.bookService.getBook().subscribe({
      next: (res) => {
        this.bookData = res;
        
      },
    });
  }

  
}
