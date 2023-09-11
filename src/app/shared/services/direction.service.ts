import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {

  private direction: string = '';

  constructor() { }

  setDirection(direction: string) {
    this.direction = direction;
  }

  getDirection() {
    return this.direction;
  }

}
