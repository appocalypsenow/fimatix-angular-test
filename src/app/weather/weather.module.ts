import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherContainer } from './weather.container';
import { WeatherService } from './weather.service';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { StoreModule } from '@ngrx/store';
import { weatherReducer } from './store/reducers/weather';
import { GetWeatherEffect } from './store/effects/weather';
import { EffectsModule } from '@ngrx/effects';
import { WeatherAtHourPipe } from './pipes/weather-at-hour.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('weather', weatherReducer),
    EffectsModule.forFeature([GetWeatherEffect]),
    ReactiveFormsModule,
  ],
  declarations: [
    SearchComponent,
    ResultsComponent,
    WeatherContainer,
    WeatherAtHourPipe,
  ],
  providers: [WeatherService],
})
export class WeatherModule {}
