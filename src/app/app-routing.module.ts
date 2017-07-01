import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingViewComponent } from './landing-view/landing-view.component';
import { LegalViewComponent } from './legal-view/legal-view.component';
import { WhoViewComponent } from './who-view/who-view.component';

const routes: Routes = [
  { path: '',  component: LandingViewComponent },
  { path: 'action',  component: LegalViewComponent},
  { path: 'action/who', component: WhoViewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
