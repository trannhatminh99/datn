import {Component, OnInit} from '@angular/core';
import {HomeService} from '../home/home.service';
import {NewsService} from './news.service';
import {News} from '../../../model/news';
import {Products} from '../../../model/products';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: News[];
  relatedProducts: Products[];
  pager: News[];

  constructor(private route: ActivatedRoute, private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.loadNews(params.page || 1);
    });
  }

  private loadNews(page) {
    this.newsService.getListNews(page).subscribe(data => {
      this.news = data['data'];
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
