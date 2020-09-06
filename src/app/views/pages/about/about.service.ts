import { Injectable } from '@angular/core';
import {ApiService} from '../../../api.service';
import {Observable} from 'rxjs';
import {About} from '../../../model/about';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private apiService: ApiService) { }
  getAbout(): Observable<About> {
    return this.apiService.get<About>(`/abouts`);
  }
}
