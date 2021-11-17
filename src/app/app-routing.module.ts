import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MotosComponent } from './motos/motos/motos.component';

const routes: Routes = [
{path: '', component: MotosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
