import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {CategoryComponent} from './category/category.component';
import {HttpClientModule} from '@angular/common/http';
import {ContactComponent} from './contact/contact.component';
import {SharedModule} from '../../shared/shared.module';
import { DetailComponent } from './detail/detail.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [PagesComponent, HomeComponent, AboutComponent, CategoryComponent, ContactComponent, DetailComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class PagesModule {
}
