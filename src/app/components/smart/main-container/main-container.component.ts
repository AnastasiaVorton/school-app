import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {
  @Input() lessonData: any;

  ngOnInit() {
  }

  public contentToJson(content: any): any {
    return JSON.stringify(content);
  }

}
