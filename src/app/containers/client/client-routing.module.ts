import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ClientContainerComponent } from './client-container/client-container.component';

export const routes: Routes = [
  {
    path: '',
    component: ClientContainerComponent
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class ClientRoutingModule { }
