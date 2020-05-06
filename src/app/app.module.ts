import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactComponent } from './components/contact/contact.component';
import { InsuranceComponent } from './components/insurance/insurance.component';
import { ProcessComponent } from './components/process/process.component';
import { SpecialtiesComponent } from './components/specialties/specialties.component';
import { LocationComponent } from './components/location/location.component';
import { DashboardAltComponent } from './components/dashboard-alt/dashboard-alt.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ContactComponent,
    InsuranceComponent,
    ProcessComponent,
    SpecialtiesComponent,
    LocationComponent,
    DashboardAltComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
