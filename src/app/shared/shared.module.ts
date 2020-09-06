import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BannerComponent} from './components/banner/banner.component';
import {CardComponent} from './components/card/card.component';
import {RouterModule} from '@angular/router';
import { CardNewsComponent } from './components/card-news/card-news.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ListNewsComponent } from './components/list-news/list-news.component';


const sharedComponents = [
  BannerComponent,
  CardComponent,
  CardNewsComponent,
  ListProductComponent,
  ListNewsComponent
];

@NgModule({
  declarations: [BannerComponent, CardComponent, CardNewsComponent, ListProductComponent, ListNewsComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
  exports: [sharedComponents]
})
export class SharedModule {
}
