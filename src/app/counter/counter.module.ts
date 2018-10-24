import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ],
  providers: []
})
export class CounterModule {}
