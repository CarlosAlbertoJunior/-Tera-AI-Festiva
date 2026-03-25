import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { ShopComponent } from './pages/shop';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: '**', redirectTo: '' }
];
