import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderComponent } from './folder/components/folder/folder.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: DashboardComponent,
  },
  {
    path: 'folder',
    component: FolderComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
