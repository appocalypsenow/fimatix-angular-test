import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getWeatherForCity } from './store/actions/weather';
import { State } from './store/reducers/weather';
import { selectWeatherForCities } from './store/selectors/weather';

@Component({
  selector: 'app-weather',
  template: `
    <app-search (citySearch)="citySearch($event)"></app-search>
    <app-results [weatherForCities]="weatherForCities$ | async"></app-results>
  `,
})
export class WeatherContainer {
  constructor(private store: Store<State>) {}

  weatherForCities$ = this.store.select(selectWeatherForCities);

  citySearch(city: string) {
    this.store.dispatch(getWeatherForCity({ city }));
  }
}
