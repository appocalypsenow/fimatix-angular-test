import { generateMockWeather, Weather } from '../../../model/weather';
import { weatherReducer } from './weather';
import { getWeatherForCitySuccess } from '../actions/weather';
import { mockBristol } from './mocks/Bristol.mock';
import { mockBristolBrighton } from './mocks/BristolBrighton.mock';

describe('WeatherReduce', () => {
  const weather1: Weather = generateMockWeather();
  const weather2: Weather = {
    ...weather1,
    city: {
      id: 2654710,
      name: 'Brighton',
      coord: { lat: 50.8284, lon: -0.1395 },
      country: 'GB',
      population: 139001,
      timezone: 3600,
      sunrise: 1633673523,
      sunset: 1633713829,
    },
  };

  describe('undefined action', () => {
    it('should return the default state', () => {
      const result = weatherReducer(undefined, {} as any);

      expect(result).toEqual([]);
    });
  });

  describe('getWeatherForCitySuccess', () => {
    it('should add Bristol to the state', () => {
      const action = getWeatherForCitySuccess({ weatherForCity: weather1 });
      const result = weatherReducer(undefined, action);

      expect(result).toEqual(mockBristol);
    });

    it('should add Bristol and Brighton to the state', () => {
      const action1 = getWeatherForCitySuccess({ weatherForCity: weather1 });
      const action2 = getWeatherForCitySuccess({ weatherForCity: weather2 });
      const result1 = weatherReducer(undefined, action1);
      const result2 = weatherReducer(result1, action2);

      expect(result2).toEqual(mockBristolBrighton);
    });
  });
});
