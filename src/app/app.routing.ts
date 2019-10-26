import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {StudentPageComponent} from './pages/student-page/student-page.component';
import {TeacherPageComponent} from './pages/teacher-page/teacher-page.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'student', component: StudentPageComponent },
  { path: 'teacher', component: TeacherPageComponent },
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule {}
