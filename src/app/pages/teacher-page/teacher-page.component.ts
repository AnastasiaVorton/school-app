import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.css']
})
export class TeacherPageComponent implements OnInit {
  public lessonData = {
    'pages': [
      {
        'id': 0,
        'content_type': 'page',
        'content': [
          {
            'type': 'header',
            'content': 'Awesome math lesson'
          },
          {
            'type': 'text',
            'content': 'Today we\'ll learn how to add two numbers'
          },
          {
            'type': 'image',
            'content': '/static/img/lesson_1/img_1.jpg'
          },
          {
            'type': 'image',
            'content': '/static/img/lesson_1/img_2.jpg'
          }
        ]
      },
      {
        'id': 1,
        'content_type': 'page',
        'content': [
          {
            'type': 'header',
            'content': 'Awesome math lesson 2'
          },
          {
            'type': 'video',
            'content': '/statis/img/lesson_1/video_1.mp4'
          },
          {
            'type': 'text',
            'content': 'Blah blah'
          }
        ]
      },
      {
        'id': 2,
        'content_type': 'test',
        'learner_type': 'audio',
        'test_type': 'single_choice',
        'question': '2+2=?',
        'choices': [
          {
            'is_correct': true,
            'content': '4'
          },
          {
            'is_correct': false,
            'content': '5'
          },
          {
            'is_correct': false,
            'content': '3'
          }
        ]
      }
    ]
  };
  public config: any;
  public collection = { count: this.lessonData.pages.length, data: this.lessonData.pages };

  constructor() {
    this.config = {
      itemsPerPage: 1,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }

  ngOnInit() {
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  public contentToJson(content: any): any {
    return JSON.stringify(content);
  }
}
