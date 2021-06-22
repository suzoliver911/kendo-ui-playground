import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseFilterCellComponent, FilterService } from '@progress/kendo-angular-grid';
import { CompositeFilterDescriptor } from '@progress/kendo-data-query';
import { dropdownItem } from 'src/app/data.categories';

@Component({
  selector: 'app-multiselect-filter',
  template: `
    <kendo-multiselect
      [listHeight]="300"
      [checkboxes]="true"
      [autoClose]="false"
      [clearButton]="true"
      [data]="data"
      [placeholder]="placeholder"
      [value]="selectedValue"
      [textField]="textField"
      [valueField]="valueField"
      (valueChange)="onChange($event)"
    >
    </kendo-multiselect>
  `,
  styleUrls: ['./multiselect-filter.component.scss'],
})
export class MultiselectFilterComponent extends BaseFilterCellComponent {
  constructor(filterService: FilterService) {
    super(filterService);
  }
  public get selectedValue(): any {
    const filter = this.filterByField(this.valueField);
    return filter ? filter.value : this.data;
  }

  @Input() public filter: CompositeFilterDescriptor;
  @Input() public data: any[];
  @Input() public placeholder: string;
  @Input() public textField: string;
  @Input() public valueField: string;

  @Output() valueChangeEvent: EventEmitter<Array<dropdownItem> | null> = new EventEmitter();

  public onChange(value: Array<dropdownItem> | null): void {
    console.log('filter value: ', value);
    this.valueChangeEvent.emit(value);
  }
}
