import { Weather } from '../../../model/weather';
import { Action, createReducer, on } from '@ngrx/store';
import {
  getWeatherForCity,
  getWeatherForCitySuccess,
} from '../actions/weather';

export type State = ReadonlyArray<Weather>;
export const initialState: State = [];

export const weatherReducer = createReducer(
  initialState,
  on(getWeatherForCitySuccess, (state, { weatherForCity }) => [
    ...state,
    weatherForCity,
  ])
);
