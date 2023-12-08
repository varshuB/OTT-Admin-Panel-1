import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelSelectionComponent } from './channel-selection.component';

describe('ChannelSelectionComponent', () => {
  let component: ChannelSelectionComponent;
  let fixture: ComponentFixture<ChannelSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
