import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonAddFormComponent } from './season-add-form.component';

describe('SeasonAddFormComponent', () => {
  let component: SeasonAddFormComponent;
  let fixture: ComponentFixture<SeasonAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
