import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/shared/service/book.service';
@Component({
  selector: 'app-user-landing',
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.css'],
})
export class UserLandingComponent implements OnInit {
  constructor(private bookService: BookServiceService) {}
  bookData!: any;
  ngOnInit(): void {
    this.getAllBook()
  }
  getAllBook() {
    this.bookService.getBook().subscribe({
      next: (res) => {
        this.bookData = res;
        console.log(this.bookData)
      },
    });
  }
}
