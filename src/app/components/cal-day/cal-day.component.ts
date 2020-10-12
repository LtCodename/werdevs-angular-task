import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
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

  constructor() { }

  toggleModal(event: any): void {
    event.stopPropagation();
    this.showModal = !this.showModal;
  }

  ngOnInit(): void {
    //console.log(this.monthName);
    //console.log(this.weekDayNumber);
  }

}

@NgModule({
  declarations: [CalDayComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CalDayComponent]
})
export class CalDayModule { }
