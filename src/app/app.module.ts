import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropdownlistFilterComponent } from './components/dropdownlist-filter/dropdownlist-filter.component';
import { MultiselectFilterComponent } from './components/multiselect-filter/multiselect-filter.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { OrderGridComponent } from './components/order-grid/order-grid.component';
import { DateSearchComponent } from './components/date-search/date-search.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { IntlModule } from '@progress/kendo-angular-intl';

@NgModule({
  declarations: [
    AppComponent,
    DropdownlistFilterComponent,
    MultiselectFilterComponent,
    ProductGridComponent,
    OrderGridComponent,
    DateSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropDownsModule,
    BrowserAnimationsModule,
    GridModule,
    DateInputsModule,
    InputsModule,
    LabelModule,
    IntlModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
