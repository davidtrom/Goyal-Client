import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BioComponent } from './bio/bio.component';
import { ContactComponent } from './contact/contact.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { ProcessComponent } from './process/process.component';
import { SpecialtiesComponent } from './specialties/specialties.component';
import { LocationComponent } from './location/location.component';
import { DashboardAltComponent } from './dashboard-alt/dashboard-alt.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    BioComponent,
    ContactComponent,
    InsuranceComponent,
    ProcessComponent,
    SpecialtiesComponent,
    LocationComponent,
    DashboardAltComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
