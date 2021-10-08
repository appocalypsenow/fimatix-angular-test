import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  @Output() citySearch: EventEmitter<string> = new EventEmitter();

  city = new FormControl('');

  search() {
    this.citySearch.emit(this.city.value);
  }
}
