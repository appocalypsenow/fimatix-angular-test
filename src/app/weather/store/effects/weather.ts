import { Injectable } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as WeatherActions from '../actions/weather';
import { map, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class GetWeatherEffect {
  constructor(
    private weatherService: WeatherService,
    private actions$: Actions
  ) {}

  getWeatherForCity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.getWeatherForCity),
      switchMap((action) =>
        this.weatherService
          .searchWeatherForCity(action.city)
          .pipe(
            map((weatherForCity) =>
              WeatherActions.getWeatherForCitySuccess({ weatherForCity })
            )
          )
      )
    )
  );
}
