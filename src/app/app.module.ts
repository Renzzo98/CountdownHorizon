import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material';
import { CountdownModule } from 'ngx-countdown';
import { MatGridListModule } from '@angular/material/grid-list';
import { CountdownComponent } from './countdown/countdown.component';
import { NgxSimpleCountdownModule } from 'ngx-simple-countdown';





@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    CountdownModule,
    NgxSimpleCountdownModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
