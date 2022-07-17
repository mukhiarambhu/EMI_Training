import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { BookServiceService } from 'src/app/shared/service/book.service';
import { MatDialog } from '@angular/material/dialog'; 
import { AddBookModalComponent } from '../add-book-modal/add-book-modal.component';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  showFiller = false;
  
  constructor(public bookService: BookServiceService,public dialog:MatDialog) {}

  bookData: any;
  displayedColumns: string[] = [
    'bookName',
    'authorName',
    'bookCategory',
    'bookQuantity',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getAllBook();
  }

  openDialog( row:any) {
  this.dialog.open(AddBookModalComponent,{data:row})
  
  //  this.bookService.getBookById(row).subscribe(res=>{
  //   console.log(res)
  //  })
    // dialogRef.afterClosed().subscribe(val=>{
    //   console.log(val)
    // });
  }
  public getAllBook() {
    this.bookService.getBook().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        // console.log(res);
      },
      error: () => {
        alert('oops! Error Occured');
      },
    });
  }


  deleteBook(val:any){
   this.bookService.deleteBook(val.id).subscribe({
    next:(res)=>{
      alert('Book has been deleted')
    }
   })
  }

}
