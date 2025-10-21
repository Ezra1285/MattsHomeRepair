import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Services } from './services/services';

export const APP_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: Home
    },
    { path: 'services', component: Services },
  
];