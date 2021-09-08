import { Component, Input, OnInit } from '@angular/core';
import { defaultProduct } from 'src/app/shared/constants/defaultValues';
import { IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: IProduct = defaultProduct;

  constructor() {}

  ngOnInit(): void {
  }

}
