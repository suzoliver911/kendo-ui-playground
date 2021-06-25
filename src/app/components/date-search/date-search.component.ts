import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { subDays, isEqual } from 'date-fns';

@Component({
  selector: 'mcl-date-search',
  templateUrl: './date-search.component.html',
  styleUrls: ['./date-search.component.scss'],
})
export class DateSearchComponent implements OnInit {
  today: Date = this.getCurrentDate();

  // allow any date to be passed in as the "starting" date
  @Input() fromDt: Date = this.today;

  // allow any date to be passed in as the "ending" date
  @Input() toDt: Date = this.today;

  // allow any function to be passed in that can be executed
  // at the end of a date change event
  @Output() dateChangedFn: EventEmitter<Function> = new EventEmitter();

  // allow any function to be passed in that can be executed
  // at the end of a date validation event
  @Output() isValidDateRangeFn: EventEmitter<Function> = new EventEmitter();

  validationErrorMessage: string = null;
  format = 'dd-MMM-yyyy';
  dateSearchRange: { from: Date; to: Date };
  lastDateSearchRange: { from: Date; to: Date };

  constructor() {}

  ngOnInit(): void {
    this.dateSearchRange = {
      from: this.fromDt,
      to: this.toDt,
    };

    this.lastDateSearchRange = {
      from: this.fromDt,
      to: this.toDt,
    };
  }

  // used to easily mock in unit test
  getCurrentDate(endOfDay: boolean = false): Date {
    return new Date();
  }

  isValidDateRange(): boolean {
    if (this.dateSearchRange.from === null || this.dateSearchRange.to === null) {
      this.validationErrorMessage = 'Invalid date range.';
      this.runIsValidDateRangeFn();
      return false;
    }
    const from: Date = this.dateSearchRange.from;
    const to: Date = this.dateSearchRange.to;

    if (from <= to) {
      this.validationErrorMessage = null;
      this.runIsValidDateRangeFn();
      return true;
    } else {
      this.validationErrorMessage = 'Invalid date range.';
      this.runIsValidDateRangeFn();
      return false;
    }
  }

  isDateRangeChanged(): boolean {
    return (
      !isEqual(this.dateSearchRange.from, this.lastDateSearchRange.from) ||
      !isEqual(this.dateSearchRange.to, this.lastDateSearchRange.to)
    );
  }

  onDateSelect() {
    if (this.isValidDateRange() && this.isDateRangeChanged()) {
      this.lastDateSearchRange.from = new Date(this.dateSearchRange.from);
      this.lastDateSearchRange.to = new Date(this.dateSearchRange.to);
      this.runDateChangedFn();
    }
  }

  lastWeek() {
    this.setDaysBack(7);
  }

  last30days() {
    this.setDaysBack(30);
  }

  last90days() {
    this.setDaysBack(90);
  }

  setDaysBack(daysBack) {
    const fromdt = subDays(this.today, daysBack);
    const todt = this.today;
    this.validationErrorMessage = null;
    this.dateSearchRange.from = fromdt;
    this.dateSearchRange.to = todt;
    this.lastDateSearchRange.from = new Date(this.dateSearchRange.from);
    this.lastDateSearchRange.to = new Date(this.dateSearchRange.to);
    this.runIsValidDateRangeFn();
    this.runDateChangedFn();
  }

  // if a function is passed into this component as an attribute, execute
  // the function upon event completion
  private runDateChangedFn() {
    if (this.dateChangedFn) this.dateChangedFn.emit();
  }

  // if a function is passed into this component as an attribute, execute
  // the function upon event completion
  private runIsValidDateRangeFn() {
    if (this.isValidDateRangeFn) this.isValidDateRangeFn.emit();
  }
}
