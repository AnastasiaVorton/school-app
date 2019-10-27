import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'school-app';
  public dyslexiaTestSlides = [
    'Dyslexia Test 2.png',
    'Dyslexia Test.png',
    'Dyslexia Test 3.png',
    'Dyslexia Test 4.png'
  ];
  public currentSlide = 0;

  constructor(private router: Router) {

  }

  public changePage(): void {
    this.currentSlide += 1;
    if (this.currentSlide === 4) {
      this.router.navigate(['/index']);
    }
  }
}
