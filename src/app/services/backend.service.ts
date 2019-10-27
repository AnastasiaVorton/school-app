import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BackendService {
  private headers = {};
  private base = 'http://192.168.43.105:5000/';
  constructor(private http: HttpClient) {}

  public getLessonInfo(lesson): Observable<any> {
    const url = `${this.base}lesson_content/${lesson}`;
    return this.http.get<any>(url, {});
  }

  public getStudentInfo(paramerets: string): Observable<any> {
    const url = `${this.base}get_student/${paramerets}`;
    return this.http.get<any>(url, {});
  }

}
