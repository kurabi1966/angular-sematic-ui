import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { SharedModule } from '../shared/shared.module';
import { StatisticComponent } from './statistic/statistic.component';
import { ItemListComponent } from './item-list/item-list.component'

@NgModule({
  declarations: [ViewsHomeComponent, StatisticComponent, ItemListComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ]
})
export class ViewsModule { }
