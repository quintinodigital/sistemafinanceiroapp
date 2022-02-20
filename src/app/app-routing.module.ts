import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'monitoramento',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./screen/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./screen/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sigup',
    loadChildren: () => import('./screen/sigup/sigup.module').then( m => m.SigupPageModule)
  },
  {
    path: 'monitoramento',
    loadChildren: () => import('./screen/monitoramento/monitoramento.module').then( m => m.MonitoramentoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
