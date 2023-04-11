import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockItemComponent } from './stock-item/stock-item.component';
import { CreatStockComponent } from './creat-stock/creat-stock.component';
import { NcreatStockComponent } from './ncreat-stock/ncreat-stock.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { StocklistComponent } from './stocklist/stocklist.component';
import { StockService } from './services/stock.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    CreatStockComponent,
    NcreatStockComponent,
    StocklistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
