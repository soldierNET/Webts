import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Stock } from '../stock';
import { of as ObservableOf } from 'rxjs';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private stockList: Stock[] = [];
  constructor(private httpService: HttpServiceService )
  {
    this.httpService.get().subscribe(data =>
      data.stocks.forEach((stock: Stock) =>
        this.stockList.push(stock)));
  }
  get ()
  {
    return this.stockList;
  }
  find (name: string)
  {
    return this.stockList.findIndex(s => s.name === name);
  }
  add (stock: Stock)
  {
    if (this.find(stock.name) != -1)
    {
      return false;
    }
    this.httpService.post(stock).subscribe(s => this.stockList.push(s));
    return true;
  }
  getStock(code:string): Observable<Stock>
  {
    return this.httpService.get()
  }
}
