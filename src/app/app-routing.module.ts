import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent}      from './modules/home/pages/homepage/homepage.component';
import {ViewPostComponent}      from './modules/home/pages/view-post/view-post.component';
import {EditPostComponent}      from './modules/home/pages/edit-post/edit-post.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent
  },
  {
    path: 'post/:uid',
    component: ViewPostComponent
  },
  {
    path: 'edit',
    component: EditPostComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit/:uid',
    component: EditPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }