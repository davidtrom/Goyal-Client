import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BioComponent } from './bio/bio.component';
import { SpecialtiesComponent } from './specialties/specialties.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { ProcessComponent } from './process/process.component';
import { ContactComponent } from './contact/contact.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'about', component: BioComponent},
  { path: 'specialties', component: SpecialtiesComponent},
  { path: 'insurance', component: InsuranceComponent},
  { path: 'process', component: ProcessComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'location', component: LocationComponent},
  
  // if no route, redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }