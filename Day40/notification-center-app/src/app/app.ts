import { Component, signal } from '@angular/core';
import { NotificationCenter } from './notification-center/notification-center';
import { AlertControls } from './alert-controls/alert-controls';
@Component({
  selector: 'app-root',
  imports: [NotificationCenter, AlertControls],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  alertState = 'success';
  alertText = 'Profile updated successfully!';

  updateAlert(event: { state: string; text: string }) {
    this.alertState = event.state;
    this.alertText = event.text;
  }
  protected readonly title = signal('notification-center-app');
}
