export interface City {
  id: number;
  name: string;
  population?: number;
  coord?: Coordinates;
  country?: string;
  timezone?: number;
  sunrise?: number;
  sunset?: number;
}

export interface Coordinates {
  lon: number;
  lat: number;
}

export interface Forecast {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  feels_like?: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface WeatherDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Clouds {
  all: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

export interface WeatherSys {
  pod: string;
}

export interface WeatherList {
  dt: number;
  main: Forecast;
  weather: WeatherDescription[];
  clouds: Clouds;
  wind: Wind;
  sys: WeatherSys;
  dt_txt: string;
  visibility?: number;
  pop?: number;
  rain?: { '3h': number };
}

export interface Weather {
  city?: City;
  cod?: string;
  message?: number;
  cnt?: number;
  list?: WeatherList[];
}

export interface Summary {
  city: string;
}

export function generateMockWeather(): Weather {
  return {
    cod: '200',
    message: 0,
    cnt: 8,
    list: [
      {
        dt: 1633694400,
        main: {
          temp: 12.35,
          feels_like: 11.94,
          temp_min: 12.35,
          temp_max: 13.44,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 1015,
          humidity: 88,
          temp_kf: -1.09,
        },
        weather: [
          { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
        ],
        clouds: { all: 6 },
        wind: { speed: 1.53, deg: 343, gust: 3.29 },
        visibility: 10000,
        pop: 0,
        sys: { pod: 'd' },
        dt_txt: '2021-10-08 12:00:00',
      },
      {
        dt: 1633705200,
        main: {
          temp: 17.11,
          feels_like: 16.68,
          temp_min: 17.11,
          temp_max: 19.76,
          pressure: 1021,
          sea_level: 1021,
          grnd_level: 1015,
          humidity: 69,
          temp_kf: -2.65,
        },
        weather: [
          { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
        ],
        clouds: { all: 3 },
        wind: { speed: 2.54, deg: 27, gust: 3.61 },
        visibility: 10000,
        pop: 0,
        sys: { pod: 'd' },
        dt_txt: '2021-10-08 15:00:00',
      },
      {
        dt: 1633716000,
        main: {
          temp: 21.8,
          feels_like: 21.42,
          temp_min: 21.8,
          temp_max: 21.8,
          pressure: 1021,
          sea_level: 1021,
          grnd_level: 1015,
          humidity: 53,
          temp_kf: 0,
        },
        weather: [
          { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
        ],
        clouds: { all: 1 },
        wind: { speed: 3.57, deg: 57, gust: 4.19 },
        visibility: 10000,
        pop: 0,
        sys: { pod: 'd' },
        dt_txt: '2021-10-08 18:00:00',
      },
      {
        dt: 1633726800,
        main: {
          temp: 18.13,
          feels_like: 17.88,
          temp_min: 18.13,
          temp_max: 18.13,
          pressure: 1022,
          sea_level: 1022,
          grnd_level: 1016,
          humidity: 72,
          temp_kf: 0,
        },
        weather: [
          { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
        ],
        clouds: { all: 4 },
        wind: { speed: 3.98, deg: 58, gust: 6.27 },
        visibility: 10000,
        pop: 0,
        sys: { pod: 'd' },
        dt_txt: '2021-10-08 21:00:00',
      },
      {
        dt: 1633737600,
        main: {
          temp: 13.63,
          feels_like: 13.53,
          temp_min: 13.63,
          temp_max: 13.63,
          pressure: 1024,
          sea_level: 1024,
          grnd_level: 1018,
          humidity: 95,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03n',
          },
        ],
        clouds: { all: 32 },
        wind: { speed: 3.22, deg: 51, gust: 8.96 },
        visibility: 10000,
        pop: 0,
        sys: { pod: 'n' },
        dt_txt: '2021-10-09 00:00:00',
      },
      {
        dt: 1633748400,
        main: {
          temp: 14.1,
          feels_like: 13.86,
          temp_min: 14.1,
          temp_max: 14.1,
          pressure: 1025,
          sea_level: 1025,
          grnd_level: 1019,
          humidity: 88,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: { all: 100 },
        wind: { speed: 3, deg: 62, gust: 7.45 },
        visibility: 10000,
        pop: 0,
        sys: { pod: 'n' },
        dt_txt: '2021-10-09 03:00:00',
      },
      {
        dt: 1633759200,
        main: {
          temp: 14.76,
          feels_like: 14.48,
          temp_min: 14.76,
          temp_max: 14.76,
          pressure: 1025,
          sea_level: 1025,
          grnd_level: 1019,
          humidity: 84,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: { all: 100 },
        wind: { speed: 3.16, deg: 66, gust: 7.38 },
        visibility: 10000,
        pop: 0,
        sys: { pod: 'n' },
        dt_txt: '2021-10-09 06:00:00',
      },
      {
        dt: 1633770000,
        main: {
          temp: 14.09,
          feels_like: 13.83,
          temp_min: 14.09,
          temp_max: 14.09,
          pressure: 1025,
          sea_level: 1025,
          grnd_level: 1019,
          humidity: 87,
          temp_kf: 0,
        },
        weather: [
          { id: 500, main: 'Rain', description: 'light rain', icon: '10n' },
        ],
        clouds: { all: 100 },
        wind: { speed: 3.23, deg: 67, gust: 7.77 },
        visibility: 10000,
        pop: 0.29,
        rain: { '3h': 0.12 },
        sys: { pod: 'n' },
        dt_txt: '2021-10-09 09:00:00',
      },
    ],
    city: {
      id: 4931378,
      name: 'Bristol',
      coord: { lat: 41.8334, lon: -71.1662 },
      country: 'US',
      population: 548285,
      timezone: -14400,
      sunrise: 1633690152,
      sunset: 1633731286,
    },
  };
}
