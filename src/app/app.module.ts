import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { register } from 'swiper/element/bundle';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { ClinicaComponent } from './clinica/clinica.component';
import { FarmaciaComponent } from './farmacia/farmacia.component';
import { DuvidasComponent } from './duvidas/duvidas.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { SwipperComponent } from './swipper/swipper.component';
import Swiper from 'swiper';
// import function to register Swiper custom elements
// register Swiper custom elements
register();

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    ClinicaComponent,
    FarmaciaComponent,
    DuvidasComponent,
    FooterComponent,
    CopyrightComponent,
    SwipperComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [Swiper],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
