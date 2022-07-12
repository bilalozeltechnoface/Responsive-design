import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { Section1Component } from './section1/section1.component';
import { CardComponent } from './card/card.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [							
    AppComponent,
      HeaderComponent,
      BannerComponent,
      FooterComponent,
      Section1Component,
      CardComponent,
      ParallaxComponent,
      ContactComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
