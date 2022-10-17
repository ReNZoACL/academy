import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    const newValue = `${String(value)}.00`;
    return newValue;
  }

}
