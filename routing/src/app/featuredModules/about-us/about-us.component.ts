/* eslint-disable no-useless-constructor */
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  ID!: number
  name!: string
  location!: string
  constructor (private activeroute: ActivatedRoute, private router: Router) {
    // this.ID = +this.activeroute.snapshot.paramMap.get('id')

    console.log(this.ID)
  }

  ngOnInit (): void {
    throw new Error('Method not implemented.')
  }
}
