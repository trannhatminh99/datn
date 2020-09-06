import { Injectable } from '@angular/core';
import {ApiService} from '../../../api.service';
import {Observable} from 'rxjs';
import {Products} from '../../../model/products';

@Injectable({
  providedIn: 'root'
})
export class ListProductService {

  constructor(private apiService: ApiService) { }
  getRelatedProducts(): Observable<Products[]> {
    return this.apiService.get<Products[]>('/products/related');
  }
}
