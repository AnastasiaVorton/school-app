import {ContentInterface} from './content.interface';

export interface LessonInterface {
  pages: PageInterface[];
}

export interface PageInterface {
  comment?: string;
  content: ContentInterface[];
  content_type: string;
  id: number;
}
