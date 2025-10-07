import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutUs } from './pages/about-us/about-us';
import { ContactUs } from './pages/contact-us/contact-us';
import { Login } from './pages/login/login';
import { Profile } from './pages/profile/profile';
import { user } from './pages/user/user';
import { NotFound } from './pages/not-found/not-found';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },
  {
    path: 'about-us',
    component: AboutUs,
    children: [
      {
        path: 'social-media',
        loadComponent: () =>
          import('./components/social-media/social-media').then((m) => m.SocialMedia),
      },
      {
        path: 'tech-media',
        loadComponent: () => import('./components/tech-media/tech-media').then((m) => m.TechMedia),
      },
    ],
  },
  {
    path: 'contact-us',
    component: ContactUs,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'profile',
    component: Profile,
    canActivate: [authGuard],
  },
  { path: '**', component: NotFound },
];
