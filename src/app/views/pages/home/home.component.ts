import {Component, ElementRef, AfterViewInit, ViewChild, Inject, OnInit} from '@angular/core';
import {Banners} from '../../../model/banners';
import {HomeService} from './home.service';
import {Products} from '../../../model/products';

declare function banner(): any;

declare function slider_about_list(): any;

declare function product_top(): any;
declare function product_featured(): any;
declare function lazyload(): any;
declare function reviews(): any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  banners: Banners[];
   techProducts: Products[];
   healthProducts: Products[];
   eduProducts: Products[];

  constructor(private homeService: HomeService, @Inject(ElementRef) elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.homeService.getListBanner().subscribe(data => this.banners = data['data']);
    this.homeService.getListProductByTech().subscribe(data => this.techProducts = data['data']);
    this.homeService.getListProductByHealth().subscribe(data => this.healthProducts = data['data']);
    this.homeService.getListProductByEdu().subscribe(data => this.eduProducts = data['data']);
    setTimeout(() => {
      banner();
      slider_about_list();
      product_top();
      product_featured();
      reviews();
      lazyload();
    }, 500);
  }
}
