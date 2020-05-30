import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './components/contact/contact.component';
import { InsuranceComponent } from './components/insurance/insurance.component';
import { ProcessComponent } from './components/process/process.component';
import { SpecialtiesComponent } from './components/specialties/specialties.component';
import { LocationComponent } from './components/location/location.component';
import { DashboardAltComponent } from './components/dashboard-alt/dashboard-alt.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { InfoComponent } from './components/info/info.component';
import { CovidComponent } from './components/covid/covid.component';
import { LoginComponent } from './login/login.component';
import { BlogFormComponent } from './blog-form/blog-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    InsuranceComponent,
    ProcessComponent,
    SpecialtiesComponent,
    LocationComponent,
    DashboardAltComponent,
    InfoComponent,
    CovidComponent,
    LoginComponent,
    BlogFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
