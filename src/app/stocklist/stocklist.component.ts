import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../stock';
import { StockService } from 'src/app/services/stock.service';
@Component({
  selector: 'app-stocklist',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.css']
})
export class StocklistComponent {
  public stocks: Stock[];

  constructor(private stockService: StockService) {
    this.stocks = this.stockService.get();
  }
}
