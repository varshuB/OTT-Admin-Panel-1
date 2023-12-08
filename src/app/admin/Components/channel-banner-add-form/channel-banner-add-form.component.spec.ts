import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelBannerAddFormComponent } from './channel-banner-add-form.component';

describe('ChannelBannerAddFormComponent', () => {
  let component: ChannelBannerAddFormComponent;
  let fixture: ComponentFixture<ChannelBannerAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelBannerAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelBannerAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
