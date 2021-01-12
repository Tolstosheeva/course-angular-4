import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../shared/models/product.models';
import { DataService } from '../shared/models/service/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart!: CartProduct[];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.cart = this.dataService.getCart();
  }

  deleteCartProduct(i: number) {
    this.dataService.deleteProductByIndex(i);
  }

  deleteCart(){
    this.dataService.deleteCart();
  }

}
