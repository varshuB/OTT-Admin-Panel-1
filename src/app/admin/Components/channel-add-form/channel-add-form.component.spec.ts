import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelAddFormComponent } from './channel-add-form.component';

describe('ChannelAddFormComponent', () => {
  let component: ChannelAddFormComponent;
  let fixture: ComponentFixture<ChannelAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
