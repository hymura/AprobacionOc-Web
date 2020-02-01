import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from "@angular/forms";
// Rutas
import { AppRoutingModule } from './app-routing.module';
// Servicios
import { OrdenesService } from './services/ordenes.service';
import { CrearOrdenService } from './services/crear-orden.service';
// Componentes
import { AppComponent } from './app.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';
import { AprobacionOCComponent } from './components/aprobacion-oc/aprobacion-oc.component';
import { CrearOrdenComponent } from './components/crear-orden/crear-orden.component';




@NgModule({
  declarations: [
    AppComponent,
    OrdenesComponent,
    AprobacionOCComponent,
    CrearOrdenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [OrdenesService, CrearOrdenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
