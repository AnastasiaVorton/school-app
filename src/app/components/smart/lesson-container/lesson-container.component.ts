import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LessonPagesService} from '../../../services/lesson.pages.service';
import {LessonInterface, PageInterface} from '../../../interfaces/lesson.interface';

@Component({
  selector: 'app-lesson-container',
  templateUrl: './lesson-container.component.html',
  styleUrls: ['./lesson-container.component.css']
})
export class LessonContainerComponent implements OnInit, OnChanges {
  @Input() lessonData: any;
  @Input() isDyslexic: boolean;
  public currentPageIndex = 0;
  public currentPage: any;

  constructor(private lessonService: LessonPagesService) {
  }

  ngOnInit() {
    this.currentPage = this.lessonData.pages[this.currentPageIndex];
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.warn(this.lessonData);
  }

  public changePage(direction: string): void {
    if (direction === 'next' && (this.currentPageIndex + 1 !== this.lessonData.pages.length)) {
      this.currentPageIndex += 1;
      return;
    }

    if (direction === 'previous' && this.currentPageIndex - 1 >= 0) {
      this.currentPageIndex -= 1;
    }
  }

}
