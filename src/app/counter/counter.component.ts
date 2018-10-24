import {
  Component
} from '@angular/core';
import { CounterState } from './counter.models';
import { IncrementAction, DecrementAction, ResetAction } from './counter.actions';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { getCounterState } from './counter.selectors';

@Component({
  selector: 'counter',
  styles: [``],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  private counterStore$: Observable<CounterState>;

  constructor(
    private store: Store<CounterState>
  ) {
    this.counterStore$ = this.store.select(getCounterState);
  }

  public increment(): void {
    this.store.dispatch(new IncrementAction());
  }

  public decrement(): void {
    this.store.dispatch(new DecrementAction());
  }

  public reset(): void {
    this.store.dispatch(new ResetAction());
  }
}
