import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
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
import { ChannelComponent } from './Components/channel/channel.component';
import { ChannelBannerComponent } from './Components/channel-banner/channel-banner.component';
import { ChannelSelectionComponent } from './Components/channel-selection/channel-selection.component';

const routes: Routes = [
{path:'',component:SidebarComponent,
children:[
  {path:'',component:DashboardComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'types',component:TypesComponent},
  {path:'category',component:CategoryComponent},
  {path:'language',component:LanguageComponent},
  {path:'settings',component:MainSettingsComponent},
  {path:'seasons',component:SeasonsComponent},
  {path:'pages',component:PagesComponent},
  {path:'coupons',component:CouponsComponent},
  {path:'users',component:UsersComponent},
  {path:'cast',component:CastComponent},
  {path:'videos',component:VideosComponent},
  {path:'notifications',component:NotificationsComponent},
  {path:'channel',component:ChannelComponent},
  {path:'channel-banner',component:ChannelBannerComponent},
  {path:'channel-selection',component:ChannelSelectionComponent},
  

  // {path:'',redirectTo:'',pathMatch:"full"}
]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
