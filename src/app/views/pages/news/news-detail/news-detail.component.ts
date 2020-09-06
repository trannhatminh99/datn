import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NewsService} from '../news.service';
import {News} from '../../../../model/news';
import {Products} from '../../../../model/products';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private newsService: NewsService) {
  }

  news: News;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.newsService.getItemNews(params.slug).subscribe(data => this.news = data['data']);
    });
  }

}
