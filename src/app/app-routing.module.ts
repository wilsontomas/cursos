import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavComponent } from './components/main-nav/main-nav.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"principal",
    pathMatch:"full"
  },
  {
    path:"authorization",
    component:MainNavComponent,
    loadChildren: () => import('./pages/authorization/authorization.module').then(m => m.AuthorizationModule)
  },
  {
    path:"principal",
    component:MainNavComponent,
    loadChildren: ()=>import('./pages/principal/principal.module').then(m=>m.PrincipalModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
