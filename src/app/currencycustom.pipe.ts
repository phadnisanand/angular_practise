import { Pipe, PipeTransform } from '@angular/core';
import {getCurrencySymbol} from '@angular/common';

@Pipe({
  name: 'currencycustom'
})
export class CurrencycustomPipe implements PipeTransform {

  transform(value: number, ...args: any[]): unknown {
    if(args[0] % 2 == 0) {
      return value + ' ' + getCurrencySymbol('USD' ,'wide');
    }
    else {
      return value + ' ' +  getCurrencySymbol('INR' ,'wide');
    }
    return null;
  }

}
