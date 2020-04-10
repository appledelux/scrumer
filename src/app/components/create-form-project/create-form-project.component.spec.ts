import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormProjectComponent } from './create-form-project.component';

describe('CreateFormProjectComponent', () => {
  let component: CreateFormProjectComponent;
  let fixture: ComponentFixture<CreateFormProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFormProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFormProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
