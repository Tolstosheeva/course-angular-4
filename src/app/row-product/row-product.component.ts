import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-row-product]',
  templateUrl: './row-product.component.html',
  styleUrls: ['./row-product.component.css']
})
export class RowProductComponent implements OnInit {

  @Input() product: any;
  @Input() id: any;
  @Output() deleteItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  deleteProduct(id: number | undefined) {
    this.deleteItem.emit(id);
  }

}
