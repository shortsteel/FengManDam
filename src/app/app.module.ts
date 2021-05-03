import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {HomeComponent} from './home/home.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {BasicInfoComponent} from './basic-info/basic-info.component';
import {WaterTemperatureComponent} from './water-temperature/water-temperature.component';
import {IceConditionComponent} from './ice-condition/ice-condition.component';
import {AppRoutingModule} from './app-routing.module';
import {MonitoringPlanComponent} from './monitoring-plan/monitoring-plan.component';
import {BasinOverviewComponent} from './basic-info/basin-overview/basin-overview.component';
import {ProjectOverviewComponent} from './basic-info/project-overview/project-overview.component';
import {ScheduleOperationComponent} from './basic-info/schedule-operation/schedule-operation.component';
import {WeatherConditionComponent} from './basic-info/weather-condition/weather-condition.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasicInfoComponent,
    WaterTemperatureComponent,
    IceConditionComponent,
    MonitoringPlanComponent,
    BasinOverviewComponent,
    ProjectOverviewComponent,
    ScheduleOperationComponent,
    WeatherConditionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    NgxEchartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
