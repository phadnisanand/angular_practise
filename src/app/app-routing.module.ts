import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { ServicesListingComponentComponent } from './services-listing-component/services-listing-component.component';
import { EditComponent } from './edit/edit.component';
import { TestAuthGuard } from './test-auth.guard';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  { path: '', component: HomeComponent,canActivate:[TestAuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'services', component: ServicesComponent,canActivate:[TestAuthGuard] },
  { path: 'about', component: AboutComponent,canActivate:[TestAuthGuard] },
  { path: 'crud', component: ContactComponent,canActivate:[TestAuthGuard]},
  { path: 'service/:id', component: ServicesListingComponentComponent },
  { path: 'dashboard',component: DashboardComponent,canActivate:[TestAuthGuard]},
  { path: 'add',component: AddComponent,canActivate:[TestAuthGuard]},
  { path: 'edit/:id',component: EditComponent,canActivate:[TestAuthGuard]},
  { path: 'demodirective',component: DirectiveDemoComponent,canActivate:[TestAuthGuard]},
  { path: 'templateform', component: TemplateformComponent,canActivate:[TestAuthGuard]},
  { path: 'reactivedrivenform', component: ReactiveformComponent,canActivate:[TestAuthGuard]},
  { path: 'pipedemo', component: PipedemoComponent,canActivate:[TestAuthGuard]},
  { path: "**",  component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
