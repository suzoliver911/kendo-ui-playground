import { Component, ViewChild } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
import { Observable, Subject } from 'rxjs';
import { dropdownItem, statuses } from 'src/app/data.statuses';
import { OrderService } from 'src/app/order.service';
import { subDays } from 'date-fns';

@Component({
  selector: 'app-order-grid',
  templateUrl: './order-grid.component.html',
  styleUrls: ['./order-grid.component.scss'],
  providers: [OrderService],
})
export class OrderGridComponent {
  @ViewChild('dt', { static: true }) dt;

  public dropDownItems = statuses;
  public placeholder = 'Filter by Status';
  public gridItems: Observable<GridDataResult> = new Observable<GridDataResult>();
  public pageSize: number = 10;
  public skip: number = 0;
  // public sortDescriptor: SortDescriptor[] = [];
  public sortDescriptor: SortDescriptor[] = [
    {
      field: 'orderedDate',
      dir: 'desc',
    },
  ];
  public filterTerm: number = 0;
  public filters: dropdownItem[];
  public showDropdown = true;
  public last90: Date = subDays(new Date(), 90);
  private debouncer$: Subject<any> = new Subject();

  constructor(private service: OrderService) {
    this.loadGridItems();
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadGridItems();
  }

  private loadGridItems(): void {
    this.gridItems = this.service.getOrders(this.skip, this.pageSize, this.sortDescriptor, this.filters);
  }

  public handleSortChange(descriptor: SortDescriptor[]): void {
    this.sortDescriptor = descriptor;
    this.loadGridItems();
  }

  public handleValueChange(value: Array<dropdownItem>): void {
    console.log('app handle value change', value);
    this.filters = value;
    this.skip = 0;
    this.loadGridItems();
  }

  public getCurrentDate(): Date {
    return new Date();
  }

  updateOrderedDateFilter() {
    const fromDt = this.dt.dateSearchRange.from;
    const toDt = this.dt.dateSearchRange.to;

    console.log('ordered data range updated');
  }

  onDateFilterChange(event, field) {
    this.debouncer$.next([field, event, true]);
  }
}
