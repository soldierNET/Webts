import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { Stock } from '../stock';
import { StockItemComponent } from '../stock-item/stock-item.component';

@Component({
  selector: 'app-creat-stock',
  templateUrl: './creat-stock.component.html',
  styleUrls: ['./creat-stock.component.css']
})

export class CreatStockComponent {
  public stockList = [
    new Stock('APP', 'APPOL', 1, -1, 'NASA')
  ]
  public stock: Stock;
  public confirmed = false;
  public exchanges = ['NYSE','NASDAQ','OTHER'];
  constructor(){
    this.stock =new Stock('','',0,0,'NASDAQ');
  }
  setStockPrice(price: any){
    this.stock.price = price;
    this.stock.previousPrice = price;
  }
  createStock(){
    let s: Stock = Object.assign({}, this.stock)
    this.stockList.push(s);
  }
}
