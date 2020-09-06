import {Component, Inject, OnInit} from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
  }

  cart: [];
  STORAGE_KEY: string = 'cart';

  ngOnInit(): void {
    this.cart = this.storage.get(this.STORAGE_KEY) || [];
  }

  totalPrice(cart): number {
    let total = 0;
    cart.forEach(function(item) {
      total += item.price * item.number_product;
    });
    return total;
  }

  deleteCart(value) {
    this.cart.splice(value, 1);
    this.storage.set(this.STORAGE_KEY, this.cart);
  }

  addNumberProduct(value, total: number) {
   this.cart[value]['number_product'] = total + 1;
    this.storage.set(this.STORAGE_KEY, this.cart);
  }
  removeNumberProduct(value, total: number) {
    if(total < 2) {
      return false;
    }
   this.cart[value]['number_product'] = total - 1;
    this.storage.set(this.STORAGE_KEY, this.cart);
  }

}
