import {Injectable} from '@angular/core';
import {ApiService} from '../../../api.service';
import {Observable} from 'rxjs';
import {News} from '../../../model/news';
import {Products} from '../../../model/products';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private apiService: ApiService) {
  }

  getListNews(page): Observable<News[]> {
    return this.apiService.get<News[]>(`/news?page=${page}`);
  }
  getItemNews(slug): Observable<News> {
    return this.apiService.get<News>(`/news/${slug}`);
  }
}
