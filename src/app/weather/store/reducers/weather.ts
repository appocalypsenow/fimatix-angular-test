import { Weather } from '../../../model/weather';
import { createReducer, on } from '@ngrx/store';
import { getWeatherForCitySuccess } from '../actions/weather';

export type State = ReadonlyArray<Weather>;
export const initialState: State = [];

export const weatherReducer = createReducer(
  initialState,
  on(getWeatherForCitySuccess, (state, { weatherForCity }) => [
    ...state,
    weatherForCity,
  ])
);
