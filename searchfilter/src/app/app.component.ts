import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  search!: string;
  datas: any = [
    { id: 1, name: 'Rambhu', company: 'EuroMonitor', city: 'Pune',angularProfency:3 },
    { id: 2, name: 'Vishnu', company: 'Google', city: 'Kochi',angularProfency:4},
    { id: 3, name: 'ANiket', company: 'Facebook', city: 'Gurgaon',angularProfency:3},
    { id: 4, name: 'Shivam', company: 'Microsoft', city: 'Kanpur',angularProfency:5 },
    { id: 5, name: 'Anurag', company: 'Amazon', city: 'Ratlam',angularProfency:3 },
    { id: 6, name: 'Aditya', company: 'Atlasain', city: 'Mumbai',angularProfency:5 },
    { id: 7, name: 'Saurav', company: 'SnapChat', city: 'Nashik',angularProfency:3 },
    { id: 8, name: 'Abninav', company: 'Nagpur', city: 'Nagpur',angularProfency:4 },
    { id: 9, name: 'Satya', company: 'Twitter', city: 'Bhubnashwar',angularProfency:4 },
  ];

  print() {
    for (let data of this.datas) {
      console.log(data.name);
    }
    console.log(typeof this.datas);
  }

  constructor() {}
}
