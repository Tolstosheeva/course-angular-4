import { Component } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  products: IProduct[] = [{
    name: 'Product 1',
    price: 50
  }, {
    name: 'Product 2',
    price: 150
  }, {
    name: 'Product 3',
    price: 100
  }];

  total: number | undefined;

  direction = 'no';
  stateDirection = true;


  ngOnInit() {
    this.calcTotal();
  }

  calcTotal() {
    let tempTotal = 0;
    this.products.forEach(item => {
      tempTotal += item.price;
    });
    this.total = tempTotal;
  }

  addProduct(name,price) {
    this.products.push({name: name, price: +price});
    this.calcTotal();
  }

  deleteProduct(id) {
    this.products.splice(id, 1);
    this.calcTotal();
  }

  changeOrder() {
    this.stateDirection = !this.stateDirection;
    this.direction = this.stateDirection ? 'increase' : 'decrease';
  }
}
