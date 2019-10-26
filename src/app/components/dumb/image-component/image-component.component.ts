import {Component, Input, OnInit} from '@angular/core';
import {ContentInterface} from '../../../interfaces/content.interface';

@Component({
  selector: 'app-image-component',
  templateUrl: './image-component.component.html',
  styleUrls: ['./image-component.component.css']
})
export class ImageComponentComponent implements OnInit {
  @Input() content: ContentInterface;
  private base = 'http://192.168.43.27:5000';
  public imgUrl;

  constructor() {
  }

  ngOnInit() {
    this.setImageUrl(this.content.content);
  }

  public setImageUrl(rest: string): void {
    this.imgUrl = `${this.base}/get_media?path=${rest}`;
  }

}
