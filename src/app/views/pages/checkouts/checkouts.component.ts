import {Component, Inject, OnInit} from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CheckoutsService} from './checkouts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-checkouts',
  templateUrl: './checkouts.component.html',
  styleUrls: ['./checkouts.component.scss']
})
export class CheckoutsComponent implements OnInit {

  constructor(private router: Router,@Inject(LOCAL_STORAGE) private storage: StorageService, private formBuilder: FormBuilder, private checkoutsService: CheckoutsService) {
  }

  cart: [];
  STORAGE_KEY: string = 'cart';
  delivery_money: number = 500000;
  checkoutForm: FormGroup;
  submitted = false;

  ngOnInit(): void {
    const auth = this.storage.get('auth');
    const name = auth.name || null;
    const phone = auth.phone || null;
    const email = auth.email || null;
    this.cart = this.storage.get(this.STORAGE_KEY) || [];
    this.checkoutForm = this.formBuilder.group({
      name: [name, Validators.required],
      email: [email, [Validators.required, Validators.email]],
      phone: [phone, [Validators.required]],
      address: ['', [Validators.required]],
      paymentmethod: ['cod', [Validators.required]],
    });
  }

  totalPrice(cart): number {
    let total = 0;
    cart.forEach(function(item) {
      total += item.price * item.number_product;
    });
    return total + this.delivery_money;
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.checkoutForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    const cart = this.storage.get('cart');
    const product = [];
    cart.forEach(function(item) {
      product.push({
        id: item.id,
        number_product: item.number_product
      });
    });
    const auth = this.storage.get('auth');
    const customer_id = auth.id || null;
    // stop here if form is invalid
    if (this.checkoutForm.invalid) {
      return;
    }
    const {name, email, phone, address, paymentmethod} = this.checkoutForm.value;
    const body = {customer_id, name, email, phone, address, paymentmethod, product};
    this.checkoutsService.createOrders(body).subscribe();
    this.storage.set('cart', []);
    this.router.navigate(['/cart']);
  }
}
