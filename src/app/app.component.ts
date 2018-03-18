import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _electronService: ElectronService){

  }

  title = 'BinanceReport';

  launchWindow() {
    this._electronService.shell.openExternal('https://binance.com');
  }
}
