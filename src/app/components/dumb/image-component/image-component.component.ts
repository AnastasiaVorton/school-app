import {Component, Input, OnInit} from '@angular/core';
import {ContentInterface} from '../../../interfaces/content.interface';

@Component({
  selector: 'app-image-component',
  templateUrl: './image-component.component.html',
  styleUrls: ['./image-component.component.css']
})
export class ImageComponentComponent implements OnInit {
  @Input() content: ContentInterface;
  private base = 'http://192.168.43.27:5000/';
  public imgUrl;

  constructor() { }

  ngOnInit() {
    this.imgUrl = this.getImageUrl(this.content.content);
  }

  public getImageUrl(rest: string): string {
    console.warn(`${this.base}/get_media?path=${rest}`);
    return `${this.base}${rest}`;
  }

}
