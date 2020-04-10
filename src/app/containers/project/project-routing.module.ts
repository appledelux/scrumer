import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProjectContainerComponent } from './project-container/project-container.component';

export const routes: Routes = [
  {
    path: '',
    component: ProjectContainerComponent
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class ProjectRoutingModule { }
