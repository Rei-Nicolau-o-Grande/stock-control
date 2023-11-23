import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { ReactiveFormsModule } from '@angular/forms';

// Import PrimeNG modules
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // Add BrowserAnimationsModule
    ReactiveFormsModule, // Add ReactiveFormsModule
    HttpClientModule, // Add HttpClientModule

    // PrimeNG modules
    CardModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    RippleModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
