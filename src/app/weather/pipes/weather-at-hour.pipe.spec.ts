import { WeatherAtHourPipe } from './weather-at-hour.pipe';
import { generateMockWeather, Weather } from '../../model/weather';

describe('WeatherAtHourPipe', () => {
  const pipe = new WeatherAtHourPipe();
  let mockWeather: Weather;

  beforeEach(() => {
    mockWeather = generateMockWeather();
    const fixedDate = new Date(2021, 9, 8, 10, 0, 0);
    jasmine.clock().mockDate(fixedDate);
  });

  it('should transform weather to temperate at 06:00', () => {
    expect(pipe.transform(mockWeather, 6)).toBe(14.76);
  });

  it('should transform weather to temperate at 12:00', () => {
    expect(pipe.transform(mockWeather, 12)).toBe(12.35);
  });

  it('should transform weather to temperate at 18:00', () => {
    expect(pipe.transform(mockWeather, 18)).toBe(21.8);
  });

  it('should transform weather to temperate at 00:00', () => {
    expect(pipe.transform(mockWeather, 24)).toBe(13.63);
  });
});
