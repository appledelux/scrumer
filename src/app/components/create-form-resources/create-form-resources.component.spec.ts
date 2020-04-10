import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormResourcesComponent } from './create-form-resources.component';

describe('CreateFormResourcesComponent', () => {
  let component: CreateFormResourcesComponent;
  let fixture: ComponentFixture<CreateFormResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFormResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFormResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
