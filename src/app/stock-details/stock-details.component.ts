import { Component } from '@angular/core';
import { Stock } from '../stock';
import { StockService } from '../services/stock.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent {
  public stock: Stock;
  constructor(private stockService: StockService, private route: ActivatedRoute){}
  ngOnInit(){
    const stockCode = this.route.snapshot.paramMap.get('code');
 
  }
}
