import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styles: ``,
})
export class Home {
  // // inject => ele = new Class() => Dependancy Injection design pattern (Singlton)
  // // inject()
  // // constructor() {}
  // @ViewChild('koko') title!: ElementRef;
  // // @ViewChildren
  // hide = false;
  // // there is on View
  // ngOnInit(): void {
  //   console.log(this.title);
  // }
  // ngAfterViewInit(): void {
  //   this.title.nativeElement.style.color = 'blue';
  // }
  // changeColor() {
  //   // this.t{itle.nativeElement.style.color = 'green';
  //   if (!this.hide) {
  //     this.title.nativeElement.style.display = 'none';
  //     this.hide = true;
  //   } else {
  //     this.title.nativeElement.style.display = 'block';
  //     this.hide = false;
  //   }
  // }
  // State (Zone , Zone , OnPush)
  // Signal -> CD (state)
  // constructor() {
  //   console.log('object');
  //   effect(() => {
  //     console.log('signal change', this.counter());
  //   });
  //   effect(() => {
  //     console.log('signal change', this.title());
  //   });
  // }
  // ef = inject(effect);
  // ngOnInit(): void {
  // effect(() => {
  //   console.log('signal change', this.title());
  // });
  // this.ef(() => {
  //   console.log('signal change', this.title());
  // });
  // }
  // title = signal<string>('HOME');
  // counter = signal<number>(0);
  // doupleCounter = computed(() => this.counter() * 2);
  // changeTitle() {
  //   this.title.set('HOME COMP');
  // }
  // up() {
  //   this.counter.update((c) => c + 1);
  // }
  // down() {
  //   this.counter.update((c) => c - 1);
  // }
  // effect => run -> signal
}
// effect(() => {
//   console.log('signal change', new Home().counter());
// });
