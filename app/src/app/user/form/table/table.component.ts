import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    @Input() f_name: string;
    @Input() s_name: string;
    @Input() email: string;
    @Input() pass: string;
    @Input() address: string;
    @Input() phone: string;
    @Input() gender: string;

  constructor() { }

  ngOnInit() {
  }

}
