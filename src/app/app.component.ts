import { Component } from '@angular/core';
import {
  trigger,
  transition,
  useAnimation,
  style,
  animate,
  animation
} from '@angular/animations';

export const slideIn = animation([
  style({ transform: "translateX({{start}})" }),
  animate("{{time}}", style({ transform: "translateX(0%)" }))
]);

export const slideOut = animation([
  animate("{{time}}", style({ transform: "translateX({{end}})" }))
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger("slideAnimation", [
      transition(":enter", [
        useAnimation(slideIn, { params: { start: "-100%", time: "250ms" } })
      ]),
      transition(":leave", [
        useAnimation(slideOut, { params: { end: "100%", time: "250ms" } })
      ]),
    ])
  ]
})
export class AppComponent {
  title = 'angular-carousel-components';
  currentSlide = 0;

  slideLeft() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  slideRight() {
    if (this.currentSlide < 1) {
      this.currentSlide++;
    }
  }
}
