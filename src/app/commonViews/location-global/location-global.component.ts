import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-location-global',
  templateUrl: './location-global.component.html',
  styleUrls: ['./location-global.component.scss']
})
export class LocationGlobalComponent implements OnInit {
  @Input() showMePartially: boolean;
  constructor() { }

  ngOnInit() {
  }

}
