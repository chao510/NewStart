import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
