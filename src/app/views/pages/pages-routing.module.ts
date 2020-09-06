import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {CategoryComponent} from './category/category.component';
import {ContactComponent} from './contact/contact.component';
import {DetailComponent} from './detail/detail.component';
import {NewsComponent} from './news/news.component';
import {NewsDetailComponent} from './news/news-detail/news-detail.component';
import {CartComponent} from './cart/cart.component';
import {CheckoutsComponent} from './checkouts/checkouts.component';

const routes: Routes = [
  {
  path: '',
  component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'category/:slug',
    component: CategoryComponent,
    pathMatch: 'full',
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'checkouts',
    component: CheckoutsComponent,
  },
  {
    path: 'news/:slug',
    component: NewsDetailComponent,
  },
  {
    path: 'detail/:slug',
    component: DetailComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
