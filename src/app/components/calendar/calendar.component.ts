import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ArrowLeft, ArrowRight } from 'src/icons';
import { CalDayModule } from '../cal-day/cal-day.component';
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

  readonly arrowLeft = this.sanitized.bypassSecurityTrustHtml(ArrowLeft);
  readonly arrowRight = this.sanitized.bypassSecurityTrustHtml(ArrowRight);

  constructor(
    public calendarCreator: CalendarCreator,
    private sanitized: DomSanitizer
    ) {}

  ngOnInit(): void {
    this.setMonthDays(this.calendarCreator.getCurrentMonth());

    this.weekDaysName.push("M");
    this.weekDaysName.push("T");
    this.weekDaysName.push("W");
    this.weekDaysName.push("T");
    this.weekDaysName.push("F");
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
    RouterModule,
    CalDayModule
  ],
  exports: [CalendarComponent]
})
export class CalendarModule { }

