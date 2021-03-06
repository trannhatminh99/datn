import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


const layoutComponent = [
  HeaderComponent,
  FooterComponent,
  AsideMenuComponent
];

@NgModule({
  declarations: [HeaderComponent, FooterComponent, AsideMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    layoutComponent
  ]
})
export class LayoutsModule { }
