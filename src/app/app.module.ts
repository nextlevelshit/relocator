import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MapBoxModule } from 'angular-mapbox/module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapBoxModule.forRoot(environment.mapbox.token)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
