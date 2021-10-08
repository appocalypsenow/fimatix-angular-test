import { WeatherService } from './weather.service';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { generateMockWeather } from '../model/weather';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  const mockWeather = generateMockWeather();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(WeatherService);
  });

  describe('#searchWeatherForCity', () => {
    it('should make an HTTP request to fetch weather', () => {
      service.searchWeatherForCity('Bristol').subscribe((result) => {
        expect(result).toEqual(mockWeather);
      });
      const req = httpTestingController.expectOne(
        'https://api.openweathermap.org/data/2.5/forecast?q=Bristol&cnt=8&units=metric&APPID=010721642521f31b0fbc8c3831d45951'
      );
      expect(req.request.method).toEqual('GET');
      req.flush(mockWeather);
      httpTestingController.verify();
    });
  });
});
