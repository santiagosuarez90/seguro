import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox.component';
import { InboxRoutingModule } from './inbox-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule} from "@angular/material/sort";
import { PageTitleNewModule } from '../../../Layout/Components/page-title-new/page-title.module';


@NgModule({
  imports: [
    CommonModule,
    InboxRoutingModule,
    PageTitleNewModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  declarations: [InboxComponent],
  providers: []
})
export class InboxModule { }
