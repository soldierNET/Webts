import { Component, OnInit, Input } from '@angular/core';
import { Stock } from '../stock';
import { NcreatStockComponent } from '../ncreat-stock/ncreat-stock.component';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent {
  @Input() stock: Stock = new Stock('a', 'b', 10, 20, 'NASAD');
  public isPositiveChange: string = 'positive';
  public changeAmount: number = 0;
  public changeRatio: number = 0;

  toggleFavorite() {
    this.stock.favorite = !this.stock.favorite;
  }

  ngOnInit(): void
  {
    this.changeAmount = this.stock.price - this.stock.previousPrice;
    this.changeRatio = (this.changeAmount / this.stock.price) * 100;
    if (this.stock.price < this.stock.previousPrice)
    {
      this.isPositiveChange = 'negative';
    }
  }
}
