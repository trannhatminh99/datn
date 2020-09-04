import {Injectable} from '@angular/core';
import {ApiService} from '../../../api.service';
import {distinctUntilChanged, map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Categories} from '../../../model/categories';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private apiService: ApiService) {
  }

  getMenus(): Observable<Categories[]>  {
    return this.apiService.get<Categories[]>('/categories');
  }

}
