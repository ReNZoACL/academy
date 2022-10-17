import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberViews'
})
export class NumberViewsPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value;
  }

}
