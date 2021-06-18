import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseFilterCellComponent, FilterService } from '@progress/kendo-angular-grid';
import { CompositeFilterDescriptor } from '@progress/kendo-data-query';

@Component({
  selector: 'app-dropdownlist-filter',
  template: `
    <kendo-dropdownlist
      [data]="data"
      (valueChange)="onChange($event)"
      [defaultItem]="defaultItem"
      [value]="selectedValue"
      [valuePrimitive]="true"
      [textField]="textField"
      [valueField]="valueField"
    >
    </kendo-dropdownlist>
  `,
  styleUrls: ['./dropdownlist-filter.component.scss'],
})
export class DropdownlistFilterComponent extends BaseFilterCellComponent {
  constructor(filterService: FilterService) {
    super(filterService);
  }
  public get selectedValue(): any {
    const filter = this.filterByField(this.valueField);
    return filter ? filter.value : null;
  }

  @Input() public filter: CompositeFilterDescriptor;
  @Input() public data: any[];
  @Input() public defaultItem: any;
  @Input() public textField: string;
  @Input() public valueField: string;

  @Output() valueChangeEvent: EventEmitter<number | null> = new EventEmitter();

  // public get defaultitem(): any {
  //   return {
  //     [this.textField]: 'Select item...',
  //     [this.valueField]: null,
  //   };
  // }

  // public onChange(value: any): void {
  //   this.applyFilter(
  //     value === null // if value of the default item
  //       ? this.removeFilter(this.valueField) // remove the filter
  //       : this.updateFilter({
  //           // otherwise add/modify the filter for the field with the value
  //           field: this.valueField,
  //           operator: 'eq',
  //           value: value,
  //         })
  //   ); // and update the root filter
  // }

  public onChange(value: number | null): void {
    console.log('filter value: ', value);
    this.valueChangeEvent.emit(value);
  }
}
