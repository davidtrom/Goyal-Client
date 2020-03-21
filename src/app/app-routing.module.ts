import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BioComponent } from './bio/bio.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'about', component: BioComponent},
  
  // if no route, redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
