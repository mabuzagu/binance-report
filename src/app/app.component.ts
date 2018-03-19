import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { BinanceService } from './binance.service';


import { IPrice } from './price.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ BinanceService ]
})
export class AppComponent {

  prices: IPrice[] = [];
  balances: any = [];
  keys: any = [];
  errorMessage: string;
  accountKeys: any;

  title = 'BinanceReport';

  constructor( private _binanceService: BinanceService
  ){

  }

  ngOnInit(): void {

  }

  saveKeys() : void {

  }

  getBalance(): void {

    // const binance = require('node-binance-api');
    //
    // binance.options({
    //   APIKEY: '',
    //   APISECRET: '',
    //   useServerTime: true
    // });
    //
    // binance.balance((error, balances) => {
    //   console.log("balances()", balances);
    //   console.log("ETH balance: ", balances.ETH.available);
    // });

    // this._binanceService.getPrices()
    //               .subscribe(
    //                 prices => this.prices = prices,
    //                 error => this.errorMessage = <any>error
    //               )

  }



}
