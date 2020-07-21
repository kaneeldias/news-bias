import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-rate-box',
  templateUrl: './rate-box.component.html',
  styleUrls: ['./rate-box.component.css']
})
export class RateBoxComponent implements OnInit {

  @Input() rating = {
    category: undefined,
    polarity: undefined
  };

  categories = [
    {value: "climate change", viewValue:"Climate Change"},
    {value: "death penalty", viewValue:"Death Penalty"},
    {value: "gun control", viewValue:"Gun Control"},
    {value: "net neutrality", viewValue:"Net Neutrality"},
    {value: "nuclear energy", viewValue:"Nuclear Energy"},
  ]

  polarities = [
    {value: -1, viewValue:"Negative (Anti)"},
    {value: 0, viewValue:"Neutral"},
    {value: 1, viewValue:"Positive (Pro)"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
