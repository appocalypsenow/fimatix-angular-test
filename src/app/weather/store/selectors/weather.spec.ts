import { generateMockWeather } from '../../../model/weather';
import { selectWeatherForCities } from './weather';

describe('Weather selectors', () => {
  describe('selectWeatherForCities', () => {
    const mockWeather = generateMockWeather();
    const initialState = { weather: [mockWeather] };

    it('should select the weather', () => {
      const result = selectWeatherForCities.projector(initialState.weather);
      expect(result).toEqual([mockWeather]);
    });
  });
});
