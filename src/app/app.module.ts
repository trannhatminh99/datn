import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './views/pages/pages.module';
import {LayoutsModule} from './views/layouts/layouts.module';
import {HttpClientModule} from '@angular/common/http';
import { TestComponent } from './test/test.component';
import {StorageServiceModule} from 'ngx-webstorage-service';
import { Test1Component } from './test1/test1.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    LayoutsModule,
    HttpClientModule,
    StorageServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
