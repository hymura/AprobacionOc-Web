import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';
import { AprobacionOCComponent } from './components/aprobacion-oc/aprobacion-oc.component';


@NgModule({
  declarations: [
    AppComponent,
    OrdenesComponent,
    AprobacionOCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
