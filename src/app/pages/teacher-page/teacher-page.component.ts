import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {filter} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {LessonPagesService} from '../../services/lesson.pages.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.css']
})
export class TeacherPageComponent implements OnInit {
  public lessonData: any;
  public socket_pagination;


  constructor(private backendService: BackendService, private lessonService: LessonPagesService) {
    this.backendService
      .getLessonInfo('lesson1')
      .pipe(filter(value => !!value))
      .subscribe(lessonInfo => this.lessonData = lessonInfo);
    this.lessonService.setLesson(this.lessonData);
  }

  ngOnInit() {
    this.socket_pagination = io('http://192.168.43.105:5000/pagination');
  }

  public contentToJson(content: any): any {
    return JSON.stringify(content);
  }
}
