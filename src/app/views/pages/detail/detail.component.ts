import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DetailService} from './detail.service';
import {Products} from '../../../model/products';

declare function order(): any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  product: Products;
  constructor(private route: ActivatedRoute, private detailService: DetailService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.detailService.getProduct(params.slug).subscribe(data => this.product = data['data']);
    });
    setTimeout(() => {
      order();
    }, 500);
  }

}
