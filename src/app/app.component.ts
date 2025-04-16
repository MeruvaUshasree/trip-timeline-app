interface TravelRoute {
  startPoint: string;
  endPoint: string;
  locationCode: string;
  level: number;
  isArrow: boolean;
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  travels: TravelRoute[] = [];
  startPoint = '';
  endPoint = '';

  addRoute() {
    const locationCode = `${this.startPoint.slice(0, 3).toUpperCase()} - ${this.endPoint.slice(0, 3).toUpperCase()}`;
    const prevTrip = this.travels[this.travels.length - 1];
    let level = 1;
    let isArrow = false;

    if (prevTrip) {
      const continued = prevTrip.endPoint.toLowerCase() === this.startPoint.toLowerCase();
      const repeated = prevTrip.startPoint.toLowerCase() === this.startPoint.toLowerCase() && prevTrip.endPoint.toLowerCase() === this.endPoint.toLowerCase();
      if (repeated) {
        level = 2;
      } else if (!continued) {
        isArrow = true;
      }
    }

    this.travels.push({ startPoint: this.startPoint, endPoint: this.endPoint, locationCode, level, isArrow });
    this.startPoint = '';
    this.endPoint = '';
  }
} 
