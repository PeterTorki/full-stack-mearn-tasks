import { Component, Input } from '@angular/core';
import { user } from '../../types';

@Component({
  selector: 'app-table-comp',
  imports: [],
  templateUrl: './table-comp.html',
  styleUrl: './table-comp.css',
})
// you have to tell child -> will get data
export class TableComp {
  @Input() koko: user[] = [];
}
