import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RowProductComponent } from './row-product/row-product.component';
import { SumPipe } from './sum.pipe';
import { SearchPipe } from './search.pipe';
import { SortPipe } from './sort.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, RowProductComponent, SumPipe, SearchPipe, SortPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }