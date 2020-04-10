import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormResourceComponent } from './create-form-resource.component';

describe('CreateFormResourceComponent', () => {
  let component: CreateFormResourceComponent;
  let fixture: ComponentFixture<CreateFormResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFormResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFormResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
