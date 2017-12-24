import { Injectable } from '@angular/core';
import { CounterState } from './counter.models';
import { IncrementAction, DecrementAction, ResetAction } from './counter.actions';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable()
export class CounterService {
  public store$;

  constructor(private store: Store<CounterState>) {
    this.store$ = this.store.select('counter');
  }

  public getCurrentValue(): Observable<CounterState> {
    return this.store$;
  }

  public increment(): void {
    this.store$.dispatch(new IncrementAction());
  }

  public decrement(): void {
    this.store$.dispatch(new DecrementAction());
  }

  public reset(): void {
    this.store$.dispatch(new ResetAction());
  }
}
