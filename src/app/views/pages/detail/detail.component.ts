import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DetailService} from './detail.service';
import {Products} from '../../../model/products';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';

declare function order(): any;


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  product: Products;
  total_product: number;
  cart: [];
  STORAGE_KEY: string = 'cart';

  constructor(private router: Router, private route: ActivatedRoute, private detailService: DetailService, @Inject(LOCAL_STORAGE) private storage: StorageService) {
    this.total_product = 1;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.detailService.getProduct(params.slug).subscribe(data => this.product = data['data']);
    });
    setTimeout(() => {
      order();
    }, 1000);
  }

  increase() {

    this.total_product = this.total_product + 1;
    return false;
  }

  decrease() {
    if (this.total_product < 2) {
      return false;
    }
    this.total_product = this.total_product - 1;
    return false;
  }

  order(id: number, number_product: number, price: number, name: string, slug: string, thumbnails: string) {
    let cart = this.storage.get(this.STORAGE_KEY) || [];
    console.log(id);
    let card_key = false;
    cart.forEach(function(item, key) {
      if (id == item.id) {
        card_key = true;
        cart[key] = {
          id: id,
          number_product: number_product + item.number_product,
          price: item.price,
          name: name,
          slug: item.slug,
          thumbnails: item.thumbnails,
        };
      }
    });
    if(!card_key) {
      cart.push({
        id: id,
        number_product: number_product,
        price: price,
        name: name,
        slug: slug,
        thumbnails: thumbnails,
      });
    }
    // insert updated array to local storage
    this.storage.set(this.STORAGE_KEY, cart);
    this.router.navigate(['/cart']);

  }
}
