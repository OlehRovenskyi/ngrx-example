import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { CounterService } from './counter.service';

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
  providers: [
    CounterService
  ]
})
export class CounterModule {}
