import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesAddFormComponent } from './types-add-form.component';

describe('TypesAddFormComponent', () => {
  let component: TypesAddFormComponent;
  let fixture: ComponentFixture<TypesAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
