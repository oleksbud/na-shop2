import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagging-header',
  templateUrl: './pagging-header.component.html',
  styleUrls: ['./pagging-header.component.scss']
})
export class PaggingHeaderComponent implements OnInit {
  @Input() pageNumber: number = 0;
  @Input() pageSize: number = 0;
  @Input() totalCount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
