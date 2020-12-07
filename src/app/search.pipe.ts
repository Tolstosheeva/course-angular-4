import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './user.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Product[], args: string): unknown {
    console.log(value, args);
    if(args) {
      return value.filter((item) => item.name.includes(args));

    }
    return value;
  }

}