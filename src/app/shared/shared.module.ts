import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';
import { MessageComponent } from './message/message.component';



@NgModule({
  declarations: [DividerComponent, MessageComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DividerComponent,
    MessageComponent
  ]
})
export class SharedModule { }
