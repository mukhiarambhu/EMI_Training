import { Component, Inject, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/shared/service/book.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

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
    private dialogeRef: MatDialogRef<AddBookComponent>,
    @Inject(MAT_DIALOG_DATA) public openDialog: any
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

    if (this.openDialog) {
      this.bookForm.controls['bookName'].setValue(this.openDialog.bookName);
      this.bookForm.controls['authorName'].setValue(this.openDialog.authorName);
      this.bookForm.controls['bookCategory'].setValue(
        this.openDialog.bookCategory
      );
      this.bookForm.controls['bookQuantity'].setValue(
        this.openDialog.bookQuantity
      );
      this.bookForm.controls['bookImage'].setValue(this.openDialog.bookImage);
    }
  }

  addBooks() {
    
    if (!this.openDialog) {
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
       
      } 
    }else {
      console.log(this.openDialog.id)
      this.updateBook();
    }
  }

  updateBook() {
    this.bookService
      .editBook(this.openDialog.id,this.bookForm.value)
      .subscribe({
        next: (res) => {
          alert('Book has been Updated Successfully');
          this.bookForm.reset();
          this.dialogeRef.close('save');
        },
        error: () => {
          alert('Error! Fill all details');
        },
      });
  }
}
