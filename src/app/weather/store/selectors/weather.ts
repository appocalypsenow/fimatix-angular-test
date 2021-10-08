import { createSelector } from '@ngrx/store';
import { Weather } from '../../../model/weather';

export const selectFeature = (state) => state.weather;

export const selectWeatherForCities = createSelector(
  selectFeature,
  (state: Array<Weather>) => state
);
