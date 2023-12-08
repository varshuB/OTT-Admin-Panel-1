import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageAddFormComponent } from './language-add-form.component';

describe('LanguageAddFormComponent', () => {
  let component: LanguageAddFormComponent;
  let fixture: ComponentFixture<LanguageAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
