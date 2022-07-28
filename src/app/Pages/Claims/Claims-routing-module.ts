import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "../../Commons/auth.guard";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Siniestros',
      status: false
    },
    children: [
      {
        path: 'inbox',
        canActivate: [AuthGuard],
        loadChildren: () => import('./inbox/inbox.module').then(m => m.InboxModule)
      },
      {
        path: 'wizard',
        canActivate: [AuthGuard],
        loadChildren: () => import('./wizard/wizard.module').then(m => m.WizardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimsRoutingModule { }
