import {Component, Input, OnInit} from '@angular/core';
import {Banners} from '../../../model/banners';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() banner: Banners[];
  constructor() { }

  ngOnInit(): void {

  }

}
