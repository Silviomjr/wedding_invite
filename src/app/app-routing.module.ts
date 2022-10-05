import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'home/localization',
    loadChildren: () =>
      import('./home/localization/localization.module').then(
        (m) => m.LocalizationPageModule
      ),
  },
  {
    path: 'home/wish-list',
    loadChildren: () =>
      import('./home/wish-list/wish-list.module').then(
        (m) => m.WishListPageModule
      ),
  },
  {
    path: 'home/informations',
    loadChildren: () =>
      import('./home/informations/informations.module').then(
        (m) => m.InformationsPageModule
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
