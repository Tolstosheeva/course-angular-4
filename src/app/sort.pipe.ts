import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './user.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Product[], ...args: unknown[]): unknown {
    console.log(value, args);
    function sortArray(a: Product, b: Product): number {
      if (args[0] === 'desc') {
        return b.price - a.price;
      } else {
        return a.price - b.price;
      }
    }
    return value.sort(sortArray);
  }
}