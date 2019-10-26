import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { TeacherPageComponent } from './pages/teacher-page/teacher-page.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';

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
    StudentPageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
