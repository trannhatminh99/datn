import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from './category.service';
import {Products} from '../../../model/products';
import {Category} from '../../../model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  products: Products[];
  category: Category;
  pager: Products[];
  slug: string;

  constructor(private route: ActivatedRoute, private  categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.slug = params.slug;
      this.loadCategory(params.slug);
      this.route.queryParams.subscribe((params) => {
        this.loadPageByCate(this.slug, params.page);
      });
    });
  }

  private loadCategory(slug) {
    this.categoryService.getCategory(slug).subscribe(data => {
      this.category = data['data'];
    });
  }

  private loadPageByCate(slug, page) {
    this.categoryService.getListProductByCategory(slug, page).subscribe(data => {
      this.products = data['data'];
      this.pager = data['meta'].pagination;
    });
  }

  range(total, current) {
    var range = [];
    for (let i = 1; i <= total; i++) {
      if (current + 2 >= i && current - 2 <= i) {
        range.push(i);
      }
    }
    return range;
  }
}
