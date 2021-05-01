import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MonitoringPlanComponent} from './monitoring-plan/monitoring-plan.component';
import {WaterTemperatureComponent} from './water-temperature/water-temperature.component';
import {BasicInfoComponent} from './basic-info/basic-info.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'BasicInfo', component: BasicInfoComponent},
  {path: 'MonitoringPlan', component: MonitoringPlanComponent},
  {path: 'WaterTemperature', component: WaterTemperatureComponent},
  {path: 'IceCondition', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
