import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BannerComponent} from './components/banner/banner.component';
import {CardComponent} from './components/card/card.component';
import {RouterModule} from '@angular/router';


const sharedComponents = [
  BannerComponent,
  CardComponent
];

@NgModule({
  declarations: [BannerComponent, CardComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
  exports: [sharedComponents]
})
export class SharedModule {
}
