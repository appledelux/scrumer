import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./containers/home/home.module')
      .then(m => m.HomeModule),
  },
  {
    path: 'projects',
    loadChildren: () => import('./containers/project/project.module')
      .then(m => m.ProjectModule),
  },
  {
    path: 'clients',
    loadChildren: () => import('./containers/client/client.module')
      .then(m => m.ClientModule),
  },
  {
    path: 'resources',
    loadChildren: () => import('./containers/resource/resource.module')
      .then(m => m.ResourceModule),
  },
  {
    path: 'resources',
    loadChildren: () => import('./containers/setting/setting.module')
      .then(m => m.SettingModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  },
  // {
  //   path: 'not-found',
  //   component: NotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
