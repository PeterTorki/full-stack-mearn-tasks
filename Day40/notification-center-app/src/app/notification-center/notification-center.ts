import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type AlertState = 'success' | 'error' | 'warning' | 'info' | undefined;

@Component({
  selector: 'app-notification-center',
  imports: [CommonModule],
  templateUrl: './notification-center.html',
  styleUrls: ['./notification-center.css'],
})
export class NotificationCenter {
  @Input() state: AlertState;
  @Input() text: string | undefined;
}
