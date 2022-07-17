import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/shared/service/book.service';

@Component({
  selector: 'app-stats-board',
  templateUrl: './stats-board.component.html',
  styleUrls: ['./stats-board.component.css'],
})
export class StatsBoardComponent implements OnInit {
  totalBook: number;
  totalRequestedBook: number;
  totalIssuedBook: number;
  constructor(private bookService: BookServiceService) {}

  ngOnInit(): void {
    this.getTotalBookLength();
    this.getTotalRequestedBook();
    this.getTotalIssuedBook()
  }

  getTotalBookLength() {
    this.bookService.getBook().subscribe({
      next: (res) => {
        this.totalBook = res.length;
      },
    });
  }

  getTotalRequestedBook() {
    this.bookService.getRequestedBook().subscribe({
      next: (res) => {
        this.totalRequestedBook = res['length'];
      },
    });
  }

  getTotalIssuedBook(){
    this.bookService.getIssuedBook().subscribe({
      next: (res)=>{
        this.totalIssuedBook=res['length']
      }
    })
  }
}
