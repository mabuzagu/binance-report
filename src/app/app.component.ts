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
    this._binanceService.getPrices()
                  .subscribe(
                    prices => this.prices = prices,
                    error => this.errorMessage = <any>error
                  )
  }



}
