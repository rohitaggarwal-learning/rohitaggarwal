import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactmeComponent } from './component/contactme/contactme.component';
import { CertificationsComponent } from './component/certifications/certifications.component';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "contact-me", component: ContactmeComponent},
  {path: "certification-list", component: CertificationsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
