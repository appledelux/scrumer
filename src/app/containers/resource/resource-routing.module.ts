import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ResourceContainerComponent } from './resource-container/resource-container.component';

export const routes: Routes = [
  {
    path: '',
    component: ResourceContainerComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class ResourceRoutingModule { }
