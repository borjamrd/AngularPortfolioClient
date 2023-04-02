import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './components/project/project.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { ButtonDownComponent } from './components/button-down/button-down.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultsComponent } from './components/results/results.component';
import { ManagementComponent } from './components/management/management.component';
import { TechComponent } from './components/tech/tech/tech.component';
import { Page404Component } from './components/page404/page404.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { ChartContributionsComponent } from './components/tech/chart-contributions/chart-contributions.component';
import { ChartProContributionsComponent } from './components/tech/chart-pro-contributions/chart-pro-contributions.component';
import { RelatedProjectsComponent } from './components/project/related-projects/related-projects.component';
import { ProjectListPlaceholderComponent } from './components/placeholders/project-list-placeholder/project-list-placeholder.component';

@NgModule({
  declarations: [
    MainComponent,
    AppComponent,
    ProjectComponent,
    HeroComponent,
    FooterComponent,
    AboutComponent,
    HeaderComponent,
    PortfolioComponent,
    ContactComponent,
    ButtonDownComponent,
    ResultsComponent,
    ManagementComponent,
    TechComponent,
    Page404Component,
    AnalyticsComponent,
    ChartContributionsComponent,
    ChartProContributionsComponent,
    RelatedProjectsComponent,
    ProjectListPlaceholderComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
