import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyDateRangePickerModule } from 'mydaterangepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingViewComponent } from './landing-view/landing-view.component';
import { MetricCardComponent } from './metric-card/metric-card.component';
import { LegalViewComponent } from './legal-view/legal-view.component';
import { WhoViewComponent } from './who-view/who-view.component';
import { WhatViewComponent } from './what-view/what-view.component';
import { WhereViewComponent } from './where-view/where-view.component';
import { WhenViewComponent } from './when-view/when-view.component';
import { WhyViewComponent } from './why-view/why-view.component';
import { ContractViewComponent } from './contract-view/contract-view.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    LandingViewComponent,
    MetricCardComponent,
    LegalViewComponent,
    WhoViewComponent,
    WhatViewComponent,
    WhereViewComponent,
    WhenViewComponent,
    WhyViewComponent,
    ContractViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    MyDateRangePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
