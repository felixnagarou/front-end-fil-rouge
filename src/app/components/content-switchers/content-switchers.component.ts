import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-content-switchers',
  templateUrl: './content-switchers.component.html',
  styleUrls: ['./content-switchers.component.css']
})
export class ContentSwitchersComponent {
  @Output() loginEvent = new EventEmitter
  @Output() logoutEvent = new EventEmitter

}
