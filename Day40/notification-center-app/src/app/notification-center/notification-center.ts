import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type AlertState = 'success' | 'error' | 'warning' | 'info';

@Component({
  selector: 'app-notification-center',
  imports: [CommonModule],
  templateUrl: './notification-center.html',
  styleUrls: ['./notification-center.css'],
})
export class NotificationCenter {
  @Input() state: AlertState = 'info';
  @Input() text: string = '';
}
