import { Component, OnInit } from '@angular/core';
import {ListNewsService} from './list-news.service';
import {News} from '../../../model/news';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {
  news: News[];
  constructor(private  newsService: ListNewsService) { }

  ngOnInit(): void {
    this.newsService.getRelatedNews().subscribe(data => {
      this.news = data['data'];
    });
  }

}
