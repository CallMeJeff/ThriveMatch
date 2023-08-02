import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { InvestorsPageComponent } from './components/investors/investors-page/investors-page.component';
import { InvestorsHomePageComponent } from './components/investors/investors-home-page/investors-home-page.component';
import { StartUpHomePageComponent } from './components/startups/start-up-home-page/start-up-home-page.component';
import { StartUpPageComponent } from './components/startups/start-up-page/start-up-page.component';
import { AboutComponent } from './pages/about/about.component';
import{HttpClientModule} from '@angular/common/http';
import { ContactComponent } from './pages/contact/contact.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './sections/footer/footer.component';
import { HeaderComponent } from './sections/header/header.component';
import { MyMatchesComponent } from './pages/my-matches/my-matches.component';
@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    LandingPageComponent,
    HomePageComponent,
    InvestorsPageComponent,
    InvestorsHomePageComponent,
    StartUpHomePageComponent,
    StartUpPageComponent,
    AboutComponent,
    ContactComponent,
    CarouselComponent,
    FooterComponent,
    HeaderComponent,
    MyMatchesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SlickCarouselModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
