import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AutomotiveCompaniesSoftwareDevelopmentComponent } from './pages/automotive-companies-software-development/automotive-companies-software-development.component';
import { BankingFinancialServicesComponent } from './pages/banking-financial-services/banking-financial-services.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CrossPlatformAppComponent } from './pages/cross-platform-app/cross-platform-app.component';
import { DevopsDevelopmentComponent } from './pages/devops-development/devops-development.component';
import { EducationElearningSoftwareDevelopmentComponent } from './pages/education-elearning-software-development/education-elearning-software-development.component';
import { HireAndroidDevelopersComponent } from './pages/hire-android-developers/hire-android-developers.component';
import { HireAngularjsDevelopersComponent } from './pages/hire-angularjs-developers/hire-angularjs-developers.component';
import { HireDevopsDevelopersComponent } from './pages/hire-devops-developers/hire-devops-developers.component';
import { HireFrontendDevelopersComponent } from './pages/hire-frontend-developers/hire-frontend-developers.component';
import { HireIonicDevelopersComponent } from './pages/hire-ionic-developers/hire-ionic-developers.component';
import { HireIosDevelopersComponent } from './pages/hire-ios-developers/hire-ios-developers.component';
import { HireMeanStackDeveloperComponent } from './pages/hire-mean-stack-developer/hire-mean-stack-developer.component';
import { HireMernStackDeveloperComponent } from './pages/hire-mern-stack-developer/hire-mern-stack-developer.component';
import { HireNodejsDevelopersComponent } from './pages/hire-nodejs-developers/hire-nodejs-developers.component';
import { HireReactNativeDevelopersComponent } from './pages/hire-react-native-developers/hire-react-native-developers.component';
import { HireReactjsDevelopersComponent } from './pages/hire-reactjs-developers/hire-reactjs-developers.component';
import { HireVuejsDevelopersComponent } from './pages/hire-vuejs-developers/hire-vuejs-developers.component';
import { HomeComponent } from './pages/home/home.component';
import { ItStrategyConsultingFirmsComponent } from './pages/it-strategy-consulting-firms/it-strategy-consulting-firms.component';
import { LogisticTransportationSoftwareDevelopmentComponent } from './pages/logistic-transportation-software-development/logistic-transportation-software-development.component';
import { MediaSoftwareDevelopmentComponent } from './pages/media-software-development/media-software-development.component';
import { MobileApplicationDevelopmentComponent } from './pages/mobile-application-development/mobile-application-development.component';
import { OutsourceSoftwareProductDevelopmentComponent } from './pages/outsource-software-product-development/outsource-software-product-development.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { RetailEcommerceSoftwareDevelopmentComponent } from './pages/retail-ecommerce-software-development/retail-ecommerce-software-development.component';
import { ServicesComponent } from './pages/services/services.component';
import { WebApplicationDevelopmentComponent } from './pages/web-application-development/web-application-development.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'automotive-software-development',component:AutomotiveCompaniesSoftwareDevelopmentComponent
  },
  {
    path:'banking-financial-services',component:BankingFinancialServicesComponent
  },
  {
    path:'contacts',component:ContactsComponent
  },
  {
    path:'cross-platform-app',component:CrossPlatformAppComponent
  },
  {
    path:'dev-ops-development',component:DevopsDevelopmentComponent
  },
  {
    path:'edu-elearning-software-development',component:EducationElearningSoftwareDevelopmentComponent
  },
  {
    path:'hire-Android-developers',component:HireAndroidDevelopersComponent
  },
  {
    path:'hire-angularjs-developers',component:HireAngularjsDevelopersComponent
  },
  {
    path:'hire-devops-developers',component:HireDevopsDevelopersComponent
  },
  {
    path:'hire-frontend-developers',component:HireFrontendDevelopersComponent
  },
  {
    path:'hire-ionic-developers',component:HireIonicDevelopersComponent
  },
  {
    path:'hire-ios-developers',component:HireIosDevelopersComponent
  },
  {
    path:'hire-mean-stack-developer',component:HireMeanStackDeveloperComponent
  },
  {
    path:'hire-mern-stack-developers',component:HireMernStackDeveloperComponent
  },
  {
    path:'hire-nodejs-developers',component:HireNodejsDevelopersComponent
  },
  {
    path:'hire-reactjs-developers',component:HireReactjsDevelopersComponent
  },
  {
    path:'hire-vuejs-developers',component:HireVuejsDevelopersComponent
  },
  {
    path:'it-strategy-consulting-firms',component:ItStrategyConsultingFirmsComponent
  },
  {
    path:'logistic-transportation-software-development',component:LogisticTransportationSoftwareDevelopmentComponent
  },
  {
    path:'media-software-development',component:MediaSoftwareDevelopmentComponent
  },
  {
    path:'mobile-application-development',component:MobileApplicationDevelopmentComponent
  },
  {
    path:'outsource-software-product-development',component:OutsourceSoftwareProductDevelopmentComponent
  },
  {
    path:'portfolio',component:PortfolioComponent
  },
  {
    path:'retail-ecommerece-software-development',component:RetailEcommerceSoftwareDevelopmentComponent
  },
  {
    path:'services',component:ServicesComponent
  },
  {
    path:'web-application-development',component:WebApplicationDevelopmentComponent
  },
  {
    path:'hire-reactnative-developers',component:HireReactNativeDevelopersComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
