import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageTitleComponent } from './page-title.component';
import { PageTitleRoutingModule } from './page-title-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  bootstrap: [
    PageTitleComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    PageTitleRoutingModule,
    NgbModule,
  ],
  declarations: [PageTitleComponent],
  exports: [PageTitleComponent]
})
export class PageTitleModule { }
