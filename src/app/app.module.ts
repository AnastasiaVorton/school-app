import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { TeacherPageComponent } from './pages/teacher-page/teacher-page.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { LessonContainerComponent } from './components/smart/lesson-container/lesson-container.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ContentComponentComponent } from './components/dumb/content-component/content-component.component';

const appRoutes: Routes = [
  { path: 'student', component: StudentPageComponent },
  { path: 'teacher', component: TeacherPageComponent },
  { path: 'index', component: AppComponent },
  { path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TeacherPageComponent,
    StudentPageComponent,
    LessonContainerComponent,
    ContentComponentComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    RouterModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
