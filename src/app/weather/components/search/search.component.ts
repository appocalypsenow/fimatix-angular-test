import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  @Output() citySearch: EventEmitter<string> = new EventEmitter();

  search(city: string) {
    this.citySearch.emit(city);
  }
}
