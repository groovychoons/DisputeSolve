import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingViewComponent } from './landing-view/landing-view.component';
import { MetricCardComponent } from './metric-card/metric-card.component';
import { LegalViewComponent } from './legal-view/legal-view.component';
import { WhoViewComponent } from './who-view/who-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingViewComponent,
    MetricCardComponent,
    LegalViewComponent,
    WhoViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
