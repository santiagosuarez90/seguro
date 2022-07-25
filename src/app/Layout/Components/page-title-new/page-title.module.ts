import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageTitleNewComponent } from './page-title.component';
import { PageTitleNewRoutingModule } from './page-title-routing.module';

@NgModule({
  imports: [
    CommonModule, FontAwesomeModule,
    PageTitleNewRoutingModule,
  ],
  declarations: [PageTitleNewComponent],
  exports: [PageTitleNewComponent]
})
export class PageTitleNewModule { }
