import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class StoreUtilsService {
  public createAction(type, payload?): Action {
    return { type };
  }
}
