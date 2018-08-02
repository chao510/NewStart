import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/ci-dashboard', pathMatch: 'full' },
  { path: 'ci-dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'detail/:id', loadChildren: 'hero-detail/hero-detail.module#hero-detailComponent' },
  { path: 'ci-heroes', loadChildren: 'app/heroes/heroes.module#HeroesModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
