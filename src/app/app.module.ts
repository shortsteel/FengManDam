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
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {ReservoirVerticalComponent} from './water-temperature/reservoir-vertical/reservoir-vertical.component';
import {OnlinePointComponent} from './water-temperature/online-point/online-point.component';
import {ReservoirTemperatureComponent} from './water-temperature/reservoir-temperature/reservoir-temperature.component';
import {MatSelectModule} from '@angular/material/select';

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
    WeatherConditionComponent,
    ReservoirVerticalComponent,
    OnlinePointComponent,
    ReservoirTemperatureComponent
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
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatButtonModule,
    MatInputModule,
    NgxEchartsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
