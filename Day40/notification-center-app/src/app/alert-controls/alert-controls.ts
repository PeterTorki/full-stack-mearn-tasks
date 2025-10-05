import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-controls',
  templateUrl: './alert-controls.html',
  styleUrls: ['./alert-controls.css'],
})
export class AlertControls {
  @Output() changeAlert = new EventEmitter<{ state: string; text: string }>();

  showSuccess() {
    this.changeAlert.emit({ state: 'success', text: 'Profile updated!' });
  }

  showError() {
    this.changeAlert.emit({ state: 'error', text: 'Failed to load data!' });
  }

  showWarning() {
    this.changeAlert.emit({ state: 'warning', text: 'Password is weak!' });
  }

  showInfo() {
    this.changeAlert.emit({ state: 'info', text: 'New updates available!' });
  }
}
