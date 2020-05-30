import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecialtiesComponent } from './components/specialties/specialties.component';
import { InsuranceComponent } from './components/insurance/insurance.component';
import { ProcessComponent } from './components/process/process.component';
import { ContactComponent } from './components/contact/contact.component';
import { LocationComponent } from './components/location/location.component';
import { DashboardAltComponent } from './components/dashboard-alt/dashboard-alt.component';
import { InfoComponent } from './components/info/info.component';
import { CovidComponent } from './components/covid/covid.component';
import { LoginComponent } from './components/login/login.component';
import { BlogFormComponent } from './components/blog-form/blog-form.component';

const routes: Routes = [
  { path: '', component: DashboardAltComponent},
  { path: 'specialties', component: SpecialtiesComponent},
  { path: 'insurance', component: InsuranceComponent},
  { path: 'process', component: ProcessComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'location', component: LocationComponent},
  { path: 'info', component: InfoComponent},
  { path: 'covid-19', component: CovidComponent},
  { path: 'doctor-login', component: LoginComponent},
  { path: 'blog-post', component: BlogFormComponent},
  
  
  // if no route, redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
