import { Component } from '@angular/core';
@Component({
  selector: 'app-slide-show',
  imports: [],
  templateUrl: './slide-show.html',
  styleUrl: './slide-show.css',
})
export class SlideShow {
  intervalId: number | undefined;
  currentIdx: number = 0;
  imgs: string[] = [
    'imgs/1.jpg',
    'imgs/2.jpg',
    'imgs/3.png',
    'imgs/4.jpg',
    'imgs/5.jpg',
    'imgs/6.jpg',
  ];
  customizeInterval(interval: number): void {
    this.stopSlideshow();
    this.intervalId = window.setInterval(() => {
      this.nextImage();
    }, interval);
  }
  stopSlideshow(): void {
    if (this.intervalId !== undefined) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }
  nextImage(): void {
    this.currentIdx = (this.currentIdx + 1) % this.imgs.length;
  }
  previousImage(): void {
    this.currentIdx = (this.currentIdx - 1 + this.imgs.length) % this.imgs.length;
  }
  get currentImage(): string {
    return this.imgs[this.currentIdx];
  }
}
