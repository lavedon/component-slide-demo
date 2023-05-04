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
    state('offScreenRight', style({  transform: 'translateX(100%)' })),
    transition('*  <=>  *',  animate('250ms'))
  ]),
  ],
})
export class AppComponent {
  title = 'angular-carousel-components';
  leftState: string  = 'onScreen';
  rightState: string  = 'offScreenRight';


  slideRight() {
    [this.leftState, this.rightState] = ['offScreenLeft', 'onScreen'];
  }
  slideLeft() {
    [this.leftState, this.rightState] = ['onScreen', 'offScreenRight'];
  }

  onAnimationStart(event: any) {
    console.log('onAnimationStart', event);
  }

  onAnimationDone(event: any) {
    console.log('onAnimationDone', event);
  }

}
