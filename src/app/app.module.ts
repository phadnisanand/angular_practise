import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { HomeChildComponent } from './home/home-child/home-child.component';
import { AnotherHomeChildComponent } from './home/another-home-child/another-home-child.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesListingComponentComponent } from './services-listing-component/services-listing-component.component';
import { AddComponent } from './add/add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { FilterPipe } from './filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { CustomDirective } from './custom.directive';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { MatchPasswordDirective } from './match-password.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentdemoPipe } from './studentdemo.pipe';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { CurrencycustomPipe } from './currencycustom.pipe';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NotFoundComponent } from './not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    HomeChildComponent,
    AnotherHomeChildComponent,
    ServicesListingComponentComponent,
    FilterPipe,
    AddComponent,
    DashboardComponent,
    EditComponent,
    LifeCycleComponent,
    DirectiveDemoComponent,
    CustomDirective,
    TemplateformComponent,
    ReactiveformComponent,
    MatchPasswordDirective,
    StudentdemoPipe,
    PipedemoComponent,
    CurrencycustomPipe,
    LoginComponent,
    RegistrationComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
