import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './pages/about/about.module';
import { AutomotiveCompaniesSoftwareDevelopmentModule } from './pages/automotive-companies-software-development/automotive-companies-software-development.module';
import { BankingFinancialServicesModule } from './pages/banking-financial-services/banking-financial-services.module';
import { ContactsModule } from './pages/contacts/contacts.module';
import { CrossPlatformAppModule } from './pages/cross-platform-app/cross-platform-app.module';
import { DevopsDevelopmentModule } from './pages/devops-development/devops-development.module';
import { EducationElearningSoftwareDevelopmentModule } from './pages/education-elearning-software-development/education-elearning-software-development.module';
import { HireAndroidDevelopersModule } from './pages/hire-android-developers/hire-android-developers.module';
import { HireAngularjsDevelopersModule } from './pages/hire-angularjs-developers/hire-angularjs-developers.module';
import { HireDevopsDevelopersModule } from './pages/hire-devops-developers/hire-devops-developers.module';
import { HomeModule } from './pages/home/home.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SharedModule,
    AboutModule,
    AutomotiveCompaniesSoftwareDevelopmentModule,
    BankingFinancialServicesModule,
    ContactsModule,
    CrossPlatformAppModule,
    DevopsDevelopmentModule,
    EducationElearningSoftwareDevelopmentModule,
    HireAndroidDevelopersModule,
    HireAngularjsDevelopersModule,
    HireDevopsDevelopersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
