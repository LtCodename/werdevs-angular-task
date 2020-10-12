import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CalendarCreator } from './calendar-creator.service';
import { Day } from './calendar-model';

@Component({
  selector: 'app-calendar',
  providers: [CalendarCreator],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  public monthDays: Day[];

  public monthNumber: number;
  public year: number;

  public weekDaysName = [];

  constructor(public calendarCreator: CalendarCreator) {}

  ngOnInit(): void {
    this.setMonthDays(this.calendarCreator.getCurrentMonth());

    this.weekDaysName.push("Mo");
    this.weekDaysName.push("Tu");
    this.weekDaysName.push("We");
    this.weekDaysName.push("Th");
    this.weekDaysName.push("Fr");
    this.weekDaysName.push("Sa");
    this.weekDaysName.push("Su");
  }

  onNextMonth(): void {
    this.monthNumber++;

    if (this.monthNumber == 13) {
      this.monthNumber = 1;
      this.year++;
    }

    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
  }

  onPreviousMonth() : void{
    this.monthNumber--;

    if (this.monthNumber < 1) {
      this.monthNumber = 12;
      this.year--;
    }

    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
  }

  private setMonthDays(days: Day[]): void {
    this.monthDays = days;
    this.monthNumber = this.monthDays[0].monthIndex;
    this.year = this.monthDays[0].year;
  }

}

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CalendarComponent]
})
export class CalendarModule { }

