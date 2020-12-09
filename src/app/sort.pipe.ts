import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(array: IProduct[], args?: any): any {
    if(args == 'increase') {
      return array.sort((a, b) => b.price - a.price);
    } else if(args == 'decrease') {
      return array.sort((a, b) => a.price - b.price);
    } else if(args == 'no') {
      return array;
    }
  }

}