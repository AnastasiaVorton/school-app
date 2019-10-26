import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { TeacherPageComponent } from './pages/teacher-page/teacher-page.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { LessonContainerComponent } from './components/smart/lesson-container/lesson-container.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ContentComponentComponent } from './components/dumb/header-component/header-component.component';
import { TextComponentComponent } from './components/dumb/text-component/text-component.component';
import { ImageComponentComponent } from './components/dumb/image-component/image-component.component';
import { TestComponentComponent } from './components/dumb/test-component/test-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainContainerComponent } from './components/smart/main-container/main-container.component';
import { BackendService } from './services/backend.service';
import { HttpClientModule } from '@angular/common/http';


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
    TextComponentComponent,
    ImageComponentComponent,
    TestComponentComponent,
    MainContainerComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    RouterModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
