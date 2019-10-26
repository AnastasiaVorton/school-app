import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lesson-container',
  templateUrl: './lesson-container.component.html',
  styleUrls: ['./lesson-container.component.css']
})
export class LessonContainerComponent implements OnInit {
  @Input() lessonData: any;

  constructor() {}

  ngOnInit() {
  }

}
