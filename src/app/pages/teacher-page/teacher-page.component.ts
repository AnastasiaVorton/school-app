import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {filter} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {LessonPagesService} from '../../services/lesson.pages.service';

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.css']
})
export class TeacherPageComponent implements OnInit {
  // public lessonData = {
  //   'pages': [
  //     {
  //       'id': 0,
  //       'content_type': 'page',
  //       'content': [
  //         {
  //           'type': 'header',
  //           'content': 'Awesome math lesson'
  //         },
  //         {
  //           'type': 'text',
  //           'content': 'Today we\'ll learn how to add two numbers'
  //         },
  //         {
  //           'type': 'image',
  //           'content': 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'
  //         },
  //         {
  //           'type': 'image',
  //           'content': 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png'
  //         }
  //       ]
  //     },
  //     {
  //       'id': 1,
  //       'content_type': 'page',
  //       'content': [
  //         {
  //           'type': 'header',
  //           'content': 'Awesome math lesson 2'
  //         },
  //         {
  //           'type': 'video',
  //           'content': 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  //         },
  //         {
  //           'type': 'text',
  //           'content': 'Blah blah'
  //         }
  //       ]
  //     },
  //     {
  //       'id': 2,
  //       'content_type': 'test',
  //       'learner_type': 'audio',
  //       'test_type': 'single_choice',
  //       'question': '2+2=?',
  //       'choices': [
  //         {
  //           'is_correct': true,
  //           'content': '4'
  //         },
  //         {
  //           'is_correct': false,
  //           'content': '5'
  //         },
  //         {
  //           'is_correct': false,
  //           'content': '3'
  //         }
  //       ]
  //     },
  //     {
  //       'id': 3,
  //       'content_type': 'test',
  //       'learner_type': 'audio',
  //       'test_type': 'multiple_choice',
  //       'question': '2+2=?',
  //       'choices': [
  //         {
  //           'is_correct': true,
  //           'content': '4'
  //         },
  //         {
  //           'is_correct': false,
  //           'content': '5'
  //         },
  //         {
  //           'is_correct': false,
  //           'content': '3'
  //         }
  //       ]
  //     }
  //   ]
  // };
  public lessonData: any;

  constructor(private backendService: BackendService, private lessonService: LessonPagesService) {
    this.backendService
      .getLessonInfo('lesson1')
      .pipe(filter(value => !!value))
      .subscribe(lessonInfo => this.lessonData = lessonInfo);
    this.lessonService.setLesson(this.lessonData);
  }

  ngOnInit() {
  }

  public contentToJson(content: any): any {
    return JSON.stringify(content);
  }
}
