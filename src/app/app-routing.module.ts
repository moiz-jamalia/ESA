import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { MainComponent } from './sign-in/main/main.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'signIn',
    children: [
      {
        path:'',
        component: SignInComponent
      },
      {
        path: 'signIn/main',
        component: MainComponent
      }
    ]
  },
  {
    path: 'signUp',
    component: SignUpComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'verify-email-address',
    component: VerifyEmailComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
