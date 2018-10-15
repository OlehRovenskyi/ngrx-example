import {
  Component
} from '@angular/core';
import { CounterState } from './counter.models';
import { CounterService } from './counter.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'counter',
  styles: [``],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  private currentValue$: Observable<CounterState>;

  constructor(
    private counterService: CounterService,
    // public actions: CounterActions
  ) {
    this.currentValue$ = counterService.getCurrentValue();
  }

  public increment(): void {
    this.counterService.increment();
  }

  public decrement(): void {
    this.counterService.decrement();
  }

  public reset(): void {
    this.counterService.reset();
  }
}
