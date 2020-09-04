import { Injectable } from '@angular/core';
import {ApiService} from '../../../api.service';
import {Observable} from 'rxjs';
import {Products} from '../../../model/products';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private apiService: ApiService) { }
  getProduct(slug): Observable<Products[]> {
    return this.apiService.get<Products[]>(`/products/${slug}`);
  }
}
