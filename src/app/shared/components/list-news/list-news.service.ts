import { Injectable } from '@angular/core';
import {ApiService} from '../../../api.service';
import {Observable} from 'rxjs';
import {News} from '../../../model/news';

@Injectable({
  providedIn: 'root'
})
export class ListNewsService {

  constructor(private apiService: ApiService) { }
  getRelatedNews(): Observable<News[]> {
    return this.apiService.get<News[]>(`/news/related`);
  }
}
