import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications-container',
  templateUrl: './notifications-container.component.html',
  styleUrls: ['./notifications-container.component.css']
})
export class NotificationsContainerComponent implements OnInit {
  public slideNotifications = {};
  constructor() { }

  ngOnInit() {
  }

}
