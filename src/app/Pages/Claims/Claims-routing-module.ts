import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Siniestros',
      status: false
    },
    children: [
      {
        path: 'wizard',
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
