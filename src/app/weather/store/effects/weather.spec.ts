import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { GetWeatherEffects } from './weather';
import {
  getWeatherForCity,
  getWeatherForCitySuccess,
} from '../actions/weather';
import { generateMockWeather, Weather } from '../../../model/weather';
import { WeatherService } from '../../weather.service';

describe('GetWeatherEffects', () => {
  let effects: GetWeatherEffects;
  let actions$ = new Observable<Action>();
  let weatherServiceSpy: jasmine.SpyObj<WeatherService>;
  const spy = jasmine.createSpyObj('WeatherService', ['searchWeatherForCity']);
  const mockWeather: Weather = generateMockWeather();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GetWeatherEffects,
        provideMockActions(() => actions$),
        {
          provide: WeatherService,
          useValue: spy,
        },
      ],
    });

    effects = TestBed.inject(GetWeatherEffects);
    actions$ = of(getWeatherForCity({ city: 'Bristol' }));
    weatherServiceSpy = TestBed.inject(
      WeatherService
    ) as jasmine.SpyObj<WeatherService>;
  });

  it('should dispatch a getWeatherForCitySuccess action', (done) => {
    weatherServiceSpy.searchWeatherForCity.and.returnValue(of(mockWeather));

    effects.getWeatherForCity$.subscribe((action) => {
      expect(action).toEqual(
        getWeatherForCitySuccess({ weatherForCity: mockWeather })
      );
      done();
    });
  });
});
