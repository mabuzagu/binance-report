import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { BinanceService } from './binance.service';

import { IPrice } from './price.interface';

const binance = require('node-binance-api');

binance.options({
  APIKEY: 'BtVEjw9f4QX7ujc5RFg2Actywwyp3qXwMRBQru8X2hnFFGVvQ4ytV7oDlGNnP8yA',
  APISECRET: 'K5dO6QusJfFWHPDRDm9IzWkYMBpFDvStSMpZYlESdYHcztLxQNfRvefGr2SEelyi',
  useServerTime: true
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ BinanceService ]
})
export class AppComponent {

  prices: IPrice[] = [];
  errorMessage: string;

  title = 'BinanceReport';

  constructor(private _electronService: ElectronService,
    private _binanceService: BinanceService
  ){

  }



  launchWindow() {
    this._electronService.shell.openExternal('https://binance.com');
  }

  ngOnInit(): void {



    binance.balance((error, balances) => {
      console.log("balances()", balances);
      console.log("ETH balance: ", balances.ETH.available);
    });

    this._binanceService.getPrices()
                  .subscribe(
                    prices => this.prices = prices,
                    error => this.errorMessage = <any>error
                  )
  }



}
