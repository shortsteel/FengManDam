import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ice-condition',
  templateUrl: './ice-condition.component.html',
  styleUrls: ['./ice-condition.component.css']
})
export class IceConditionComponent implements OnInit {
  imgSrc: string;

  constructor() {
  }

  ngOnInit(): void {
    this.imgSrc = 'assets/images/ice-condition/2014-03-18.png';
  }
}
