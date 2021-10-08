import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WeatherContainer } from './weather.container';
import { generateMockWeather } from '../model/weather';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { getWeatherForCity } from './store/actions/weather';

describe('WeatherContainer', () => {
  let component: WeatherContainer;
  let fixture: ComponentFixture<WeatherContainer>;
  let store: MockStore;
  const initialState = { weather: [generateMockWeather()] };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherContainer],
      imports: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);

    spyOn(store, 'dispatch');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#citySearch', () => {
    it('should dispatch a getWeatherForCity action', () => {
      const city = 'Bristol';
      const action = getWeatherForCity({ city });
      component.citySearch(city);
      expect(store.dispatch).toHaveBeenCalledOnceWith(action);
    });
  });
});
