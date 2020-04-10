import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceContainerComponent } from './resource-container/resource-container.component';
import { ResourceRoutingModule } from './resource-routing.module';
import { CreateFormResourceComponent } from '../../components/create-form-resource/create-form-resource.component';

@NgModule({
  declarations: [
    ResourceContainerComponent,
    CreateFormResourceComponent
  ],
  imports: [
    CommonModule,
    ResourceRoutingModule
  ]
})
export class ResourceModule { }
