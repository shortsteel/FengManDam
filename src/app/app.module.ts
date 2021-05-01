import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {HomeComponent} from './home/home.component';
import {BasicInfoComponent} from './basic-info/basic-info.component';
import {WaterTemperatureComponent} from './water-temperature/water-temperature.component';
import {IceConditionComponent} from './ice-condition/ice-condition.component';
import { AppRoutingModule } from './app-routing.module';
import { MonitoringPlanComponent } from './monitoring-plan/monitoring-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasicInfoComponent,
    WaterTemperatureComponent,
    IceConditionComponent,
    MonitoringPlanComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
