import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectContainerComponent } from './project-container/project-container.component';
import { ProjectRoutingModule } from './project-routing.module';
import { CreateFormProjectComponent } from 'src/app/components/create-form-project/create-form-project.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ProjectContainerComponent,
    CreateFormProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProjectModule { }
