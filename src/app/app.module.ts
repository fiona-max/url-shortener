import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { UrlFormComponent } from './shared/components/url-form/url-form.component';
import { FeaturesComponent } from './shared/components/features/features.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FootSectionComponent } from './shared/components/foot-section/foot-section.component';
import {HttpClientModule} from "@angular/common/http";
import { ClipboardModule } from 'ngx-clipboard';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    UrlFormComponent,
    FeaturesComponent,
    FootSectionComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
