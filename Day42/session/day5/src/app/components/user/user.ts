import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styles: ``,
})
export class User {
  // ActivedRouter
  route = inject(ActivatedRoute);
  router = inject(Router);
  id: string = this.route.snapshot.params['id'];
  // constructor() {
  //   console.log(this.route.snapshot.params['id']);
  //   this.id = this.route.snapshot.params['id'];
  // }
  // inject
  // ngOnInit(): void {
  //   console.log(this.route.snapshot.params['id']);
  // }

  // programtice routing

  go() {
    this.router.navigate(['/profile']);
  }
}
