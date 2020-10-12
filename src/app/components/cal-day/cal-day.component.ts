import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalStateService, State } from 'src/app/modal-state.service';

@Component({
  selector: 'app-cal-day',
  templateUrl: './cal-day.component.html',
  styleUrls: ['./cal-day.component.scss']
})
export class CalDayComponent implements OnInit, OnDestroy {

  @Input() dayNumber: number;
  @Input() weekDayNumber: number;
  @Input() monthName: string;
  public showModal: boolean;
  subscription;

  inputsData:State = {
    day: "",
    month: ""
  };

  constructor(private stateManager: ModalStateService) { }

  toggleModal(event: any): void {
    event.stopPropagation();
    this.showModal = !this.showModal;

    //send new data to state manager
    this.stateManager.setState(this.monthName, `${this.dayNumber}th ${this.getDayName(this.weekDayNumber)}`);
  }

  ngOnInit(): void {
    //subscribe to state
    this.subscription = this.stateManager.getState().subscribe(
      res => {
        this.inputsData.day = res.day;
        this.inputsData.month = res.month;
      },
      err => {
        console.error(`An error occurred: ${err.message}`);
      }
    );
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
