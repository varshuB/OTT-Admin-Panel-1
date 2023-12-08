import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HeaderComponent } from './Components/header/header.component';
import { SignupComponent } from './Components/signup/signup.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { MaterialModule } from '../material/material/material.module';
import { CustomSideNavComponent } from './Components/custom-side-nav/custom-side-nav.component';
import { TypesComponent } from './Components/types/types.component';
import { CategoryComponent } from './Components/category/category.component';
import { LanguageComponent } from './Components/language/language.component';
import { MainSettingsComponent } from './Components/main-settings/main-settings.component';
import { SeasonsComponent } from './Components/seasons/seasons.component';
import { PagesComponent } from './Components/pages/pages.component';
import { CouponsComponent } from './Components/coupons/coupons.component';
import { UsersComponent } from './Components/users/users.component';
import { CastComponent } from './Components/cast/cast.component';
import { VideosComponent } from './Components/videos/videos.component';
import { NotificationsComponent } from './Components/notifications/notifications.component';
import { TypesAddFormComponent } from './Components/types-add-form/types-add-form.component';
import { CategoryAddFormComponent } from './Components/category-add-form/category-add-form.component';
import { LanguageAddFormComponent } from './Components/language-add-form/language-add-form.component';
import { SeasonAddFormComponent } from './Components/season-add-form/season-add-form.component';
import { CouponsAddFormComponent } from './Components/coupons-add-form/coupons-add-form.component';
import { ChannelComponent } from './Components/channel/channel.component';
import { ChannelBannerComponent } from './Components/channel-banner/channel-banner.component';
import { ChannelSelectionComponent } from './Components/channel-selection/channel-selection.component';
import { ChannelAddFormComponent } from './Components/channel-add-form/channel-add-form.component';
import { ChannelBannerAddFormComponent } from './Components/channel-banner-add-form/channel-banner-add-form.component';











@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SignupComponent,
    SidebarComponent,
    CustomSideNavComponent,
    TypesComponent,
    CategoryComponent,
    LanguageComponent,
    MainSettingsComponent,
    SeasonsComponent,
    PagesComponent,
    CouponsComponent,
    UsersComponent,
    CastComponent,
    VideosComponent,
    NotificationsComponent,
    TypesAddFormComponent,
    CategoryAddFormComponent,
    LanguageAddFormComponent,
    SeasonAddFormComponent,
    CouponsAddFormComponent,
    ChannelComponent,
    ChannelBannerComponent,
    ChannelSelectionComponent,
    ChannelAddFormComponent,
    ChannelBannerAddFormComponent







  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,

  ]
})
export class AdminModule { }
