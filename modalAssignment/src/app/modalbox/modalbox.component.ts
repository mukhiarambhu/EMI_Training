import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BookServiceService } from '../services/book-service.service';
import {MatDialogRef} from '@angular/material/dialog'
@Component({
  selector: 'app-modalbox',
  templateUrl: './modalbox.component.html',
  styleUrls: ['./modalbox.component.css'],
})
export class ModalboxComponent implements OnInit {
  constructor(public dialog: MatDialog ,private formBuilder:FormBuilder, private bookService:BookServiceService,private dialogeRef:MatDialogRef<ModalboxComponent>) {}
  bookForm!: FormGroup;

  ngOnInit(): void {
    this.bookForm=this.formBuilder.group({
      bookName:['',Validators.required],
      authorName:['',Validators.required],
      bookCategory:['',Validators.required],
      bookQuantity:['',Validators.required],
      description:['',Validators.required],
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalboxComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  addBook(){
   if(this.bookForm.valid){
    this.bookService.postBook(this.bookForm.value).subscribe({
      next:(res)=>{
        alert('Book Has been Added Successfully')
        this.bookForm.reset()
        this.dialogeRef.close('save')
      },error:()=>{
        alert('Error! Fill details Correctly')
      }
    })
   }
  }
}
