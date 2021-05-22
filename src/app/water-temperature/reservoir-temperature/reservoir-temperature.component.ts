import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-reservoir-temperature',
  templateUrl: './reservoir-temperature.component.html',
  styleUrls: ['./reservoir-temperature.component.css']
})
export class ReservoirTemperatureComponent implements OnInit {
  imgSrc: string;

  constructor() {
  }

  ngOnInit(): void {
    this.imgSrc = 'assets/images/reservoir-temperature/2013-06.bmp';
  }

}
