import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public inputVariable='Hello! I am your Parent!!';
  constructor() { }

  ngOnInit(): void {
  }

  public getData(value:string):void{
    console.log(value);
  }
}
