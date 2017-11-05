import {Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {ProfileComponent} from './components/user/profile/profile.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile/:userId', component: ProfileComponent},
];
export const routing =  RouterModule.forRoot(appRoutes);
