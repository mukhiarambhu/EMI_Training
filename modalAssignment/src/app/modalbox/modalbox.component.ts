import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-modalbox',
  templateUrl: './modalbox.component.html',
  styleUrls: ['./modalbox.component.css'],
})
export class ModalboxComponent implements OnInit {
  constructor(public dialog: MatDialog ,private formBuilder:FormBuilder) {}
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
    console.log(this.bookForm.value)
  }
}
