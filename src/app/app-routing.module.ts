import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutNewComponent } from './Layout/base-layout-new/base-layout-new.component';
import { PagesLayoutComponent } from './Layout/pages-layout/pages-layout.component';

// // Pages

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutNewComponent,
    children: [
      {
        path: 'claims',
        loadChildren: () => import('./Pages/Claims/Claims.module').then(m => m.ClaimsModule)
      },
      {
        path: '',
        redirectTo: 'claims/inbox',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    component: PagesLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./Pages/Auth/Auths.module').then(m => m.AuthsModule)
      },
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
