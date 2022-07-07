import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BookService } from '../services/book.service';
import {MatDialogRef,MatDialog} from '@angular/material/dialog'
@Component({
  selector: 'app-add-book-modal-box',
  templateUrl: './add-book-modal-box.component.html',
  styleUrls: ['./add-book-modal-box.component.css']
})
export class AddBookModalBoxComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private bookService:BookService,public dialog: MatDialog,private dialogeRef:MatDialogRef<AddBookModalBoxComponent>) { }
   bookForm!:FormGroup
  ngOnInit(): void {
   this.bookForm=this.formBuilder.group({
    bookName:['',Validators.required],
      authorName:['',Validators.required],
      bookCategory:['',Validators.required],
      bookQuantity:['',Validators.required],
      bookImage:['',Validators.required]
   })
   
   console.log(this.bookForm.value)
  }

  addBooks(){
    if(this.bookForm.valid){
      this.bookService.postBook(this.bookForm.value).subscribe({
        next:(res)=>{
          alert('Book has been Added Successfully')
          this.bookForm.reset()
          this.dialogeRef.close('save')
        },error:()=>{
          alert('Error! Fill all details')
        }
      })
      console.log(this.bookForm.value)
    }
  }

}
