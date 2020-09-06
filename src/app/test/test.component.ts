import {Component, Injectable, Inject, OnInit} from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

@Injectable()
export class TestComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService, private router: Router) {
  }

  cart: [];
  STORAGE_KEY: string = 'cart';

  ngOnInit(): void {
    this.router.navigate(['/test1']);

    // const cart = this.storage.get(this.STORAGE_KEY) || [];
    // push new task to array
    // currentTodoList.push({
    //   title: 'nhat',
    //   isChecked: 'minh'
    // });
    //
    // // insert updated array to local storage
    // this.storage.set(this.STORAGE_KEY, cart);
    // console.log(this.storage.get('cart') || 'LocaL storage is empty');
  }

}
