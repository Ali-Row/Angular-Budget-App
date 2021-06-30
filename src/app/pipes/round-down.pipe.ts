import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundDown'
})
export class RoundDownPipe implements PipeTransform {

  transform(percentage: any): any {
    /* If the number ends with a decimal place return the full number limited to 2 decimal places for example 104.44 => 104.44% 
    else return just the number without any decimal places */
    return parseInt(percentage.toFixed(2).split(".")[1]) > 0 ? percentage.toFixed(2).split(".").join(".") : percentage;
  }

}
