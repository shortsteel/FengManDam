import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MonitoringPlanComponent} from './monitoring-plan/monitoring-plan.component';
import {WaterTemperatureComponent} from './water-temperature/water-temperature.component';
import {BasicInfoComponent} from './basic-info/basic-info.component';
import {IceConditionComponent} from './ice-condition/ice-condition.component';
import {BasinOverviewComponent} from './basic-info/basin-overview/basin-overview.component';
import {ProjectOverviewComponent} from './basic-info/project-overview/project-overview.component';
import {ScheduleOperationComponent} from './basic-info/schedule-operation/schedule-operation.component';
import {WeatherConditionComponent} from './basic-info/weather-condition/weather-condition.component';

const routes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {
    path: 'BasicInfo', component: BasicInfoComponent, children: [
      {path: '', redirectTo: 'BasinOverview', pathMatch: 'full'},
      {path: 'BasinOverview', component: BasinOverviewComponent},
      {path: 'ProjectOverview', component: ProjectOverviewComponent},
      {path: 'ScheduleOperation', component: ScheduleOperationComponent},
      {path: 'WeatherCondition', component: WeatherConditionComponent}
    ]
  },
  {path: 'MonitoringPlan', component: MonitoringPlanComponent},
  {path: 'WaterTemperature', component: WaterTemperatureComponent},
  {path: 'IceCondition', component: IceConditionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
