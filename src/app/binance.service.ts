import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IPrice } from './price.interface';

@Injectable()
export class BinanceService {

  private _baseUrl = "https://api.binance.com/api/v3/ticker/price";

  constructor(private _http: HttpClient) { }

  getPrices(): Observable<IPrice[]> {
    return this._http.get<IPrice[]>(this._baseUrl)
            .do(data => console.log("All :" + JSON.stringify(data)))
            .catch(this.handleError)
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }



}
