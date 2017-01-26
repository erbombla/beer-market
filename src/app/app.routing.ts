import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { StoreComponent } from './store/store.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
  path: '',
  component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'store',
    component: StoreComponent
  },
  {
    path: 'beers/:id',
    component: BeerDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
