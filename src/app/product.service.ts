import { Injectable } from '@angular/core';
import { DataResult, orderBy, process, SortDescriptor } from '@progress/kendo-data-query';
import { Observable, of } from 'rxjs';
import { products } from './data.products';
import { dropdownItem } from './data.categories';

@Injectable()
export class ProductService {
  public getProducts(
    skip: number,
    pageSize: number,
    sortDescriptor: SortDescriptor[],
    filters: dropdownItem[]
  ): Observable<DataResult> {
    let data;
    if (filters) {
      data = process(orderBy(products, sortDescriptor), {
        filter: {
          logic: 'or',
          filters: filters.map((value) => ({
            field: 'CategoryID',
            operator: 'eq',
            value: value.value,
          })),
        },
      }).data;
    } else {
      data = orderBy(products, sortDescriptor);
    }
    return of({
      data: data.slice(skip, skip + pageSize),
      total: data.length,
    });
  }
}
