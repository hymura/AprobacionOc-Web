import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';
import { CrearOrdenComponent } from './components/crear-orden/crear-orden.component';


const APP_ROUTES: Routes = [{path: '', redirectTo: '/appComponent', pathMatch: 'full'},
                            {path: 'appComponent', component: AppComponent },
                            {path: 'ordenes', component: OrdenesComponent },
                            {path: 'crear-orden', component: CrearOrdenComponent },

                      ];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
