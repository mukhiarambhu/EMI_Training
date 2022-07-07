import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/shared/service/book.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookServiceService,
    public dialog: MatDialog,
    private dialogeRef: MatDialogRef<AddBookComponent>
  ) {}
  bookForm!: FormGroup;
  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      bookName: ['', Validators.required],
      authorName: ['', Validators.required],
      bookCategory: ['', Validators.required],
      bookQuantity: ['', Validators.required],
      bookImage: ['', Validators.required],
    });

    
  }

  addBooks() {
    if (this.bookForm.valid) {
      this.bookService.postBook(this.bookForm.value).subscribe({
        next: (res) => {
          alert('Book has been Added Successfully');
          this.bookForm.reset();
          this.dialogeRef.close('save');
        },
        error: () => {
          alert('Error! Fill all details');
        },
      });
      console.log(this.bookForm.value);
    }
  }
}
