import {Component, Input, OnInit} from '@angular/core';
import {ContentInterface} from '../../../interfaces/content.interface';

@Component({
  selector: 'app-text-component',
  templateUrl: './text-component.component.html',
  styleUrls: ['./text-component.component.css']
})
export class TextComponentComponent implements OnInit {
  @Input() content: ContentInterface;

  constructor() { }

  ngOnInit() {
  }

}
