import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface State {
  month: string;
  day: string;
}

@Injectable({
  providedIn: 'root'
})
export class ModalStateService {

  constructor() { }

  private initialState: State = {month: "", day: ""};
  private dataTracker = new BehaviorSubject<State>(this.initialState);

  /** Allows subscription to the behavior subject as an observable */
  getState(): Observable<State> {
    return this.dataTracker.asObservable();
  }

  /**
   * Allows updating the current value of the behavior subject
   * @param val a number representing the current value
   * @param delta a number representing the positive or negative change in current value
   */
  setState(newMonth: string, newDay: string): void {
    this.dataTracker.next({month: newMonth, day: newDay});
  }

  /** Resets the count to the initial value */
  resetState(): void {
    this.dataTracker.next(this.initialState);
  }
}
