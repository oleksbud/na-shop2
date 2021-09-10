import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { defaultProduct } from '../../shared/constants/defaultValues';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct = defaultProduct;

  constructor(
    private shopService: ShopService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    const productId = this.activateRoute.snapshot.paramMap.get('id') || 0;
    this.shopService.getProduct(+productId).subscribe(product => {
      this.product = product;
    }, error => {
      console.log(error);
    });
  }

}
