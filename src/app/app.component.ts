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
  alphaState: string  = 'offScreenLeft';
  betaState: string  = 'onScreen';
  gammaState: string  = 'offScreenRight';


  slideRight() {
    if (this.alphaState === 'offScreenLeft') {
      this.alphaState = 'onScreen';
      this.betaState = 'offScreenRight';
    }
    if (this.alphaState === 'onScreen') {
      this.alphaState = 'offScreenRight';
    }
  }
  
  slideLeft() {
    if (this.alphaState === 'offScreenRight') {
      this.alphaState = 'onScreen';
      this.betaState = 'offScreenLeft';
    }
    if (this.alphaState === 'onScreen') {
      this.alphaState = 'offScreenLeft';
      this.gammaState = 'onScreen';
    }

    if (this.alphaState === 'offScreenLeft') {
      this.gammaState = 'onScreen';
    }
  }
  
}