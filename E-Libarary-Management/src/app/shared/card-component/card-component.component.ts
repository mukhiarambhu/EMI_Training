import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {
@Input() bookdata:any=[]
@Input() showdata = false;

  constructor() { }

  ngOnInit(): void {
  }

}
