import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TestComponent} from './test/test.component';
import {CommonModule} from '@angular/common';
import {Test1Component} from './test1/test1.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'test1',
    component: Test1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, CommonModule]
})
export class AppRoutingModule {
}
