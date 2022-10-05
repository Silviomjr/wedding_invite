import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { InformationsPage } from './informations/informations.page';
import { LocalizationPage } from './localization/localization.page';
import { WishListPage } from './wish-list/wish-list.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'localization',
    component: LocalizationPage,
  },
  {
    path: 'wish-list',
    component: InformationsPage,
  },
  {
    path: 'informations',
    component: WishListPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
