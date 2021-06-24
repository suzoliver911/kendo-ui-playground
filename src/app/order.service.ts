import { Injectable } from '@angular/core';
import { DataResult, orderBy, process, SortDescriptor } from '@progress/kendo-data-query';
import { Observable, of } from 'rxjs';
import { orders } from './data.orders';
import { dropdownItem } from './data.categories';

@Injectable()
export class OrderService {
  public getOrders(
    skip: number,
    pageSize: number,
    sortDescriptor: SortDescriptor[],
    filters: dropdownItem[]
  ): Observable<DataResult> {
    let data;
    if (filters) {
      data = process(orderBy(orders, sortDescriptor), {
        filter: {
          logic: 'or',
          filters: filters.map((value) => ({
            field: 'Status.StatusID',
            operator: 'eq',
            value: value.value,
          })),
        },
      }).data;
    } else {
      data = orderBy(orders, sortDescriptor);
    }
    return of({
      data: data.slice(skip, skip + pageSize),
      total: data.length,
    });
  }
}
