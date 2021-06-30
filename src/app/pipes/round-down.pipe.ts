import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundDown'
})
export class RoundDownPipe implements PipeTransform {

  transform(value: any): any {
    /* If the number ends with a perfectly rounded .00 decimal place return only the first number
    for example 100.00 => 100% else return the two decimal places like this for example 102.30% */
    return value.toFixed(2).endsWith(".00") ? value : value.toFixed(2);
  }

}
