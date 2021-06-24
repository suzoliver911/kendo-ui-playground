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




@NgModule({
  declarations: [
    AppComponent,
    DropdownlistFilterComponent,
    MultiselectFilterComponent,
    ProductGridComponent,
    OrderGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropDownsModule,
    BrowserAnimationsModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
