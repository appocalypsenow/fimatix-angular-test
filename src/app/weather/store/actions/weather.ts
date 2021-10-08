import { createAction, props } from '@ngrx/store';
import { Weather } from '../../../model/weather';

export const getWeatherForCity = createAction(
  '[Weather] Get Weather For City',
  props<{ city: string }>()
);

export const getWeatherForCitySuccess = createAction(
  '[Weather] Get Weather For City Success',
  props<{ weatherForCity: Weather }>()
);
