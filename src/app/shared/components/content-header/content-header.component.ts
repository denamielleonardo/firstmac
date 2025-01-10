import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent {
  @Input() headerTitle: string = '';
  @Input() searchText: string = '';
  @Input() hasSearch: boolean = false;

  @Output() emitSearchText: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}
}
