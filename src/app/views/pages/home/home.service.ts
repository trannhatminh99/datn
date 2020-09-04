import { Injectable } from '@angular/core';
import {ApiService} from '../../../api.service';
import {Observable} from 'rxjs';
import {Banners} from '../../../model/banners';
import {Products} from '../../../model/products';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private apiService: ApiService) { }
  getListBanner(): Observable<Banners[]> {
    return this.apiService.get<Banners[]>('/banners');
  }
  getListProductByTech(): Observable<Products[]> {
    return this.apiService.get<Products[]>('/category/dich-vu-ky-thuat');
  }
  getListProductByHealth(): Observable<Products[]> {
    return this.apiService.get<Products[]>('/category/dich-vu-suc-khoe');
  }

  getListProductByEdu(): Observable<Products[]> {
    return this.apiService.get<Products[]>('/category/dich-vu-dao-tao');
  }
}
