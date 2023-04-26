import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Stock } from '../stock';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private API_URL = 'http://localhost:3000/stocks';

  constructor(private httpClient: HttpClient) { }

  public get (): Observable<any>
  {
    return this.httpClient.get(this.API_URL);
  }

  public post (stock: Stock): Observable<any>
  {
    return this.httpClient.post(this.API_URL, stock);
  }
  public getStock(code:string): Observable<any>{
    return this.httpClient.get<Stock>('/api/stocks/'+ code);
  }
}