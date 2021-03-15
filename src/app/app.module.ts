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
import { HireFrontendDevelopersModule } from './pages/hire-frontend-developers/hire-frontend-developers.module';
import { HireIonicDevelopersModule } from './pages/hire-ionic-developers/hire-ionic-developers.module';
import { HireIosDevelopersModule } from './pages/hire-ios-developers/hire-ios-developers.module';
import { HireMeanStackDeveloperModule } from './pages/hire-mean-stack-developer/hire-mean-stack-developer.module';
import { HireMernStackDeveloperModule } from './pages/hire-mern-stack-developer/hire-mern-stack-developer.module';
import { HireNodejsDevelopersModule } from './pages/hire-nodejs-developers/hire-nodejs-developers.module';
import { HireReactNativeDevelopersModule } from './pages/hire-react-native-developers/hire-react-native-developers.module';
import { HireReactjsDevelopersModule } from './pages/hire-reactjs-developers/hire-reactjs-developers.module';
import { HireVuejsDevelopersModule } from './pages/hire-vuejs-developers/hire-vuejs-developers.module';
import { HomeModule } from './pages/home/home.module';
import { ItStrategyConsultingFirmsModule } from './pages/it-strategy-consulting-firms/it-strategy-consulting-firms.module';
import { LogisticTransportationSoftwareDevelopmentModule } from './pages/logistic-transportation-software-development/logistic-transportation-software-development.module';
import { MediaSoftwareDevelopmentModule } from './pages/media-software-development/media-software-development.module';
import { MobileApplicationDevelopmentModule } from './pages/mobile-application-development/mobile-application-development.module';
import { OutsourceSoftwareProductDevelopmentModule } from './pages/outsource-software-product-development/outsource-software-product-development.module';
import { PortfolioModule } from './pages/portfolio/portfolio.module';
import { RetailEcommerceSoftwareDevelopmentModule } from './pages/retail-ecommerce-software-development/retail-ecommerce-software-development.module';
import { ServicesModule } from './pages/services/services.module';
import { WebApplicationDevelopmentModule } from './pages/web-application-development/web-application-development.module';
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
    HireDevopsDevelopersModule,
    HireFrontendDevelopersModule,
    HireIonicDevelopersModule,
    HireIosDevelopersModule,
    HireMeanStackDeveloperModule,
    HireMernStackDeveloperModule,
    HireNodejsDevelopersModule,
    HireReactjsDevelopersModule,
    HireVuejsDevelopersModule,
    ItStrategyConsultingFirmsModule,
    LogisticTransportationSoftwareDevelopmentModule,
    MediaSoftwareDevelopmentModule,
    MobileApplicationDevelopmentModule,
    OutsourceSoftwareProductDevelopmentModule,
    PortfolioModule,
    RetailEcommerceSoftwareDevelopmentModule,
    ServicesModule,
    WebApplicationDevelopmentModule,
    HireReactNativeDevelopersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
