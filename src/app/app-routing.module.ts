import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BioComponent } from './components/bio/bio.component';
import { SpecialtiesComponent } from './components/specialties/specialties.component';
import { InsuranceComponent } from './components/insurance/insurance.component';
import { ProcessComponent } from './components/process/process.component';
import { ContactComponent } from './components/contact/contact.component';
import { LocationComponent } from './components/location/location.component';
import { DashboardAltComponent } from './components/dashboard-alt/dashboard-alt.component';

const routes: Routes = [
  { path: '', component: DashboardAltComponent},
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
