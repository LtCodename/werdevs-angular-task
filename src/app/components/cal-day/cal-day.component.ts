import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cal-day',
  templateUrl: './cal-day.component.html',
  styleUrls: ['./cal-day.component.scss']
})
export class CalDayComponent implements OnInit {

  @Input() dayNumber: number;
  @Input() weekDayNumber: number;
  @Input() monthName: string;
  public showModal: boolean = false;
  public newMonth: string;
  public newDay: string;

  constructor() { }

  toggleModal(event: any): void {
    event.stopPropagation();
    this.showModal = !this.showModal;
  }

  ngOnInit(): void {
    this.newMonth = this.monthName;
    this.newDay = `${this.dayNumber}th ${this.getDayName(this.weekDayNumber)}`;
  }

  getDayName(dayNumber:number): string {
    let dayName: string;
    
    switch(dayNumber) {
      case 1:
        dayName = "Monday";
        break;
      case 2:
        dayName = "Tuesday";
        break;
      case 3:
        dayName = "Wednesday";
        break;
      case 4:
        dayName = "Thursday";
        break;
      case 5:
        dayName = "Friday";
        break;
      case 6:
        dayName = "Saturday";
        break;
      case 0:
        dayName = "Sunday";
        break;
      default:
        dayName = "Monday";
    }

    return dayName;
  }
}

@NgModule({
  declarations: [CalDayComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [CalDayComponent]
})
export class CalDayModule { }
