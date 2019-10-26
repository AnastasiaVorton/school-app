import {Component, Input, OnInit} from '@angular/core';
import {ContentInterface} from '../../../interfaces/content.interface';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class ContentComponentComponent implements OnInit {
  @Input() content: ContentInterface;

  constructor() { }

  ngOnInit() {
  }

}
