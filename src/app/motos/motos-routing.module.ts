import { MotosModule } from './motos.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '', pathMatch: 'full', redirectTo: 'motos'},
  {
    path: 'motos',
    loadChildren: () => import('./motos.module').then(m => m.MotosModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotosRoutingModule { }
