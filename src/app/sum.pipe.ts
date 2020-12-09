import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum',
  pure: false
})
export class SumPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let sum = value.reduce((a: any, b: { [x: string]: any; }) => a + b[args], 0);
    return sum ;
  }

}