import {Component, Inject, Input, OnInit} from '@angular/core';
import {HeaderService} from './header.service';
import {Categories} from '../../../model/categories';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menus: Categories[];
  auth;
  constructor(private router: Router,private menuService: HeaderService, @Inject(LOCAL_STORAGE) private storage: StorageService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.menuService.getMenus().subscribe(data => this.menus = data['data']);
    this.auth = this.storage.get('auth');
    // this.route.url.subscribe(data => {
    //   console.log(data);
    // });
  }

  logout() {
    this.storage.set('auth', null);
    this.auth = null;
    this.router.navigate(['/auth/login']);
  }
}
