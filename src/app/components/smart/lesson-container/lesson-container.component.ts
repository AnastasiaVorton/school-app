import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {LessonPagesService} from '../../../services/lesson.pages.service';
declare var $: any;

@Component({
  selector: 'app-lesson-container',
  templateUrl: './lesson-container.component.html',
  styleUrls: ['./lesson-container.component.css']
})
export class LessonContainerComponent implements OnInit, OnChanges {
  @Input() lessonData: any;
  @Input() isDyslexic: boolean;
  @Input() isTeacher: boolean;
  @Input() paginationSocket;
  @Input() canvasSocket;
  @Input() sendDrawing;

  public currentPageIndex = 0;
  public currentPage: any;
  public sketcher;

  constructor(private lessonService: LessonPagesService, private cd: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.currentPage = this.lessonData.pages[this.currentPageIndex];
    this.paginationSocket.on('pagination_to_student', (msg, cb) => {
      this.currentPageIndex = msg.pageId;
    });
    this.cd.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.sketcher = $('#drawing-canvas').sketchable();
    const contents = this.sketcher.sketchable('serializer.save');
    this.canvasSocket.emit('canvas_to_server', {'canvas_content': contents});
  }

  public changePage(direction: string, isTeacher: boolean): void {
    if (direction === 'next' && (this.currentPageIndex + 1 !== this.lessonData.pages.length)) {
      this.currentPageIndex += 1;

      if (isTeacher) {
        console.warn('ima teacher');
        // debugger;
        this.paginationSocket.emit('pagination_to_server', {'pageId': this.currentPageIndex});
      }
      return;
    }

    if (direction === 'previous' && this.currentPageIndex - 1 >= 0) {
      this.currentPageIndex -= 1;

      if (isTeacher) {
        this.paginationSocket.emit('pagination_to_server', {'pageId': this.currentPageIndex});
      }
    }
  }

}
