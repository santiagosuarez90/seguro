import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTitleNewComponent } from './page-title.component';

const routes: Routes = [
  {
    path: '',
    component: PageTitleNewComponent,
    data: {
      title: 'PageTitle'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageTitleNewRoutingModule { }
