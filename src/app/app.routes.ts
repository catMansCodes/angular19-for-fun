import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: LayoutComponent },
  { path: 'profile-card', component: ProfileCardComponent },
  { path: '**', component: PageNotFoundComponent },
];
