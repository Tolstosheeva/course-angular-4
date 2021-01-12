import { Component, OnInit } from '@angular/core';
import { Category, Product } from '../shared/models/product.models';
import { DataService } from '../shared/service/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products!: Product[];
  readonly Category = Category;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    console.log(this.dataService.products);
    this.products = this.dataService.getProduct();
  }
  addCart(product: Product){
    this.dataService.addCart(product);
  }
}
