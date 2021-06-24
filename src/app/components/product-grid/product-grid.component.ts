import { Component } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';
import { categories, dropdownItem } from 'src/app/data.categories';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss'],
  providers: [ProductService],
})
export class ProductGridComponent {
  public dropDownItems = categories;
  public defaultItem = { text: 'Filter by Category', value: null };
  public placeholder = 'Filter by Category';
  public gridItems: Observable<GridDataResult> = new Observable<GridDataResult>();
  public pageSize: number = 10;
  public skip: number = 0;
  public sortDescriptor: SortDescriptor[] = [];
  public filterTerm: number = 0;
  public filters: dropdownItem[];

  constructor(private service: ProductService) {
    this.loadGridItems();
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadGridItems();
  }

  private loadGridItems(): void {
    this.gridItems = this.service.getProducts(this.skip, this.pageSize, this.sortDescriptor, this.filters);
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
}
