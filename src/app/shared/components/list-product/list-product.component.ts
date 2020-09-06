import { Component, OnInit } from '@angular/core';
import {Products} from '../../../model/products';
import {ListProductService} from './list-product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  products: Products[];
  constructor(private productsService: ListProductService) { }

  ngOnInit(): void {
    this.productsService.getRelatedProducts().subscribe(data => {
      this.products = data['data'];
    });
  }

}
