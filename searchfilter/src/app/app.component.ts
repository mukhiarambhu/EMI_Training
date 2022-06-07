import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  search!: string;
  datas: any = [
    { id: 1, name: 'Rambhu', company: 'EuroMonitor', city: 'Pune' },
    { id: 2, name: 'Vishnu', company: 'Google', city: 'Kochi' },
    { id: 3, name: 'ANiket', company: 'Facebook', city: 'Gurgaon' },
    { id: 4, name: 'Shivam', company: 'Microsoft', city: 'Kanpur' },
    { id: 5, name: 'Anurag', company: 'Amazon', city: 'Ratlam' },
    { id: 6, name: 'Aditya', company: 'Atlasain', city: 'Mumbai' },
    { id: 7, name: 'Saurav', company: 'SnapChat', city: 'Nashik' },
    { id: 8, name: 'Abninav', company: 'Nagpur', city: 'Nagpur' },
    { id: 9, name: 'Satya', company: 'Twitter', city: 'Bhubnashwar' },
  ];

  print() {
    for (let data of this.datas) {
      console.log(data.name);
    }
    console.log(typeof this.datas);
  }

  constructor() {}
}
