import { Component } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';
import { dropdownItem, statuses } from 'src/app/data.statuses';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-order-grid',
  templateUrl: './order-grid.component.html',
  styleUrls: ['./order-grid.component.scss'],
  providers: [OrderService],
})
export class OrderGridComponent {
  public dropDownItems = statuses;
  public placeholder = 'Filter by Status';
  public gridItems: Observable<GridDataResult> = new Observable<GridDataResult>();
  public pageSize: number = 10;
  public skip: number = 0;
  public sortDescriptor: SortDescriptor[] = [];
  public filterTerm: number = 0;
  public filters: dropdownItem[];
  public showDropdown = true;

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
}
