import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import { Weather } from '../../model/weather';

@Pipe({ name: 'weatherAtHour' })
export class WeatherAtHourPipe implements PipeTransform {
  transform(weather: Weather, hour: number): any {
    const now = dayjs();

    return weather.list.filter((m) => {
      let t = now.startOf('day').hour(hour);
      if (t.isBefore(now)) t = t.add(1, 'd');
      return t.isSame(dayjs(m.dt_txt));
    })[0]?.main.temp;
  }
}
