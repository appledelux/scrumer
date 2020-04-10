import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientContainerComponent } from './client-container/client-container.component';
import { ClientRoutingModule } from './client-routing.module';
import { CreateFormClientComponent } from '../../components/create-form-client/create-form-client.component';

@NgModule({
  declarations: [
    ClientContainerComponent,
    CreateFormClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
