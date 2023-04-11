import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import {Validators, FormBuilder } from '@angular/forms';
import { Stock } from '../stock';
import { StockItemComponent } from '../stock-item/stock-item.component';
import { StockService } from 'src/app/services/stock.service';



@Component({
  selector: 'app-ncreat-stock',
  templateUrl: './ncreat-stock.component.html',
  styleUrls: ['./ncreat-stock.component.css']
})
export class NcreatStockComponent {
  public formBuilder: FormBuilder = new FormBuilder();
  public stockForm: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required, Validators.minLength(3)]],
    code: [null, [Validators.required, Validators.minLength(2)]],
    price: [0, [Validators.required, Validators.min(0)]],
    exchange: null,
  });
  constructor(private stockService: StockService){
  }

  public addStock (): void
  {
    const name = this.stockForm.value.name;
    const code = this.stockForm.value.code;
    const price = this.stockForm.value.price;
    const exchange = this.stockForm.value.exchange;
    let stock = new Stock(name, code, price, price, exchange);
    this.stockService.add(stock);
    // this.newItemEvent.emit(stock);
    this.stockForm.reset();
  }

  public resetForm (): void
  {
    this.stockForm.setValue({
      name: null,
      code: null,
      price: 0,
      exchange: null
    });
    this.stockForm.markAsUntouched();
    this.stockForm.markAsPristine();
  }

  get name ()
  {
    return this.stockForm.controls['name'];
  }

  get code ()
  {
    return this.stockForm.controls['code'];
  }
}
