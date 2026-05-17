import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApartmentList } from './pages/apartment-list/apartment-list';

const routes: Routes = [
  {
    path: '',
    component: ApartmentList,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApartmentsRoutingModule {}
