import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  state
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  trigger('flyInOut', [
    state('offScreenLeft', style({  transform: 'translateX(-100%)' })),
    state('onScreen', style({  transform: 'translateX(0)' })),
    state('offScreenRight', style({  transform: 'translateX(100%)' })),
    transition('*  <=>  *',  animate('250ms'))
  ]),
  ],
})
export class AppComponent {
  title = 'angular-carousel-components';
  leftState: string  = 'offScreenLeft';
  middleState: string  = 'onScreen';
  rightState: string  = 'offScreenRight';


  slideRight() {
    if (this.middleState === 'onScreen') {
      this.middleState = 'offScreenRight';
      this.leftState = 'onScreen';
    }
    if (this.rightState === 'onScreen') {
      this.rightState = 'offScreenRight';
      this.middleState = 'onScreen';
    }
  } 
  slideLeft() {
    if (this.middleState === 'onScreen') {
      this.middleState = 'offScreenLeft';
      this.rightState = 'onScreen';
    }
    if (this.leftState === 'onScreen') {
      this.leftState = 'offScreenLeft';
      this.middleState = 'onScreen';
    }
  }
  
}