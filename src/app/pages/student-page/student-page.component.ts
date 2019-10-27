import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {LessonPagesService} from '../../services/lesson.pages.service';
import {filter} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {StudentInfoInterface} from '../../interfaces/student.info.interface';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {
  public lessonData: any;
  public studentInfo: StudentInfoInterface;
  public socket_pagination;

  constructor(private backendService: BackendService, private lessonService: LessonPagesService, private route: ActivatedRoute) {
    this.backendService
      .getLessonInfo('lesson1')
      .pipe(filter(value => !!value))
      .subscribe(lessonInfo => this.lessonData = lessonInfo);
    this.lessonService.setLesson(this.lessonData);
    this.route.queryParams.subscribe(params => {
      this.backendService.getStudentInfo(params.id).subscribe(responce => this.studentInfo = responce);
    });

  }

  ngOnInit() {
    this.socket_pagination = io('http://192.168.43.105:5000/pagination');
  }

}
