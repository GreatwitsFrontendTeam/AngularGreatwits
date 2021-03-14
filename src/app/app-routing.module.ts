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
import { HomeComponent } from './pages/home/home.component';

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
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
