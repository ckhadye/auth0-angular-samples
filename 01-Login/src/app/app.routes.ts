import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuardService } from './guard/auth-guard.service';


export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'profile',canActivate: [AuthGuardService], component: UserProfileComponent },
  { path: '**', redirectTo: '' }
];
