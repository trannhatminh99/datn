import {Injectable} from '@angular/core';
import {ApiService} from '../../../api.service';
import {Observable} from 'rxjs';
import {Products} from '../../../model/products';
import {Category} from '../../../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private apiService: ApiService) {
  }

  getListProductByCategory(slug, page): Observable<Products[]> {
    return this.apiService.get<Products[]>(`/category/${slug}?page=${page}`);
  }

  getCategory(slug): Observable<Category> {
    return this.apiService.get<Category>(`/categories/${slug}`);
  }

  getRelatedNews(): Observable<Products[]> {
    return this.apiService.get<Products[]>(`/news/related`);
  }
}
