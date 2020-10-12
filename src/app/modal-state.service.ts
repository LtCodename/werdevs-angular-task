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

  getState(): Observable<State> {
    return this.dataTracker.asObservable();
  }

  setState(newMonth: string, newDay: string): void {
    this.dataTracker.next({month: newMonth, day: newDay});
  }

  resetState(): void {
    this.dataTracker.next(this.initialState);
  }
}
