import {Injectable} from '@angular/core';
import {LessonInterface} from '../interfaces/lesson.interface';

@Injectable( {
  providedIn: 'root'
})
export class LessonPagesService {
  private lesson: LessonInterface;

  public setLesson(lesson: LessonInterface) {
    this.lesson = lesson;
  }

  public getLessonPage(index) {
    return this.lesson.pages[index];
  }
}
