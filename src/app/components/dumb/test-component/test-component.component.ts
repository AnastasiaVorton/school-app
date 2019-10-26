import {Component, Input, OnInit} from '@angular/core';
import {TestInterface} from '../../../interfaces/test.interface';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  @Input() test: TestInterface;

  constructor() { }

  ngOnInit() {
  }

}
