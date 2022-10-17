import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PlanComponent } from '../../components/plan/plan.component';
import { ScheduleComponent } from '../../components/schedule/schedule.component';
import { PriceComponent} from '../../components/price/price.component';
import { CountdownComponent } from '../../components/countdown/countdown.component';
import { PricePipe } from '../../shared/pipes/price/price.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    PlanComponent,
    PriceComponent,
    ScheduleComponent,
    CountdownComponent,
    PricePipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
