import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookServiceService } from 'src/app/shared/service/book.service';
import { ToastrService } from 'ngx-toastr';
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

  constructor(
    private bookService: BookServiceService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  getDetails(val: any) {
    if (this.count < 3) {
      this.bookService.getBookById(val).subscribe({
        next: (res) => {
          console.log(res);
          this.count++;
          if (this.count <= 3) {
            this.setToLocalStorage(res);
          }
        },
      });
    } else {
      this.toastr.success('You cannot request more than 3 books', 'hello');
    }
  }

  setToLocalStorage(bookdetail: any) {
    console.log('hello');
    if (localStorage.getItem('requestedBook') == null) {
      localStorage.setItem('requestedBook', JSON.stringify([]));
    }
    let localData = JSON.parse(localStorage.getItem('requestedBook'));
    localData.push(bookdetail);
    localStorage.setItem('requestedBook', JSON.stringify(localData));
  }
}
