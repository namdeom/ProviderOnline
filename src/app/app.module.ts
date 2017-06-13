import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RountingModule } from './app-routing.modules';
import { defaultpagecomponent } from './defaultpage/defaultpage.component';
import { pagenotfoundcomponent } from './pagenotfound/pagenotfound.component';
import { detailspagecomponent } from './detailspage/detailspage.component';
import { latlagfromaddressservice } from './latlagfromaddress/latlagfromaddress.service';
import { latlagfromaddresscomponent } from './latlagfromaddress/latlagfromaddress.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
//AgmCoreModule.forRoot({apiKey:'AIzaSyCLSAVnSsuaswd1pV2aoKvBXuearz0F7g0'})

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    defaultpagecomponent,
    pagenotfoundcomponent,
    detailspagecomponent,
    latlagfromaddresscomponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RountingModule,
    AgmCoreModule
  ],
  providers: [latlagfromaddressservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
