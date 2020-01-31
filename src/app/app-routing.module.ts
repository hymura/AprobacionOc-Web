import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';


const APP_ROUTES: Routes = [{path: '', redirectTo: '/appComponent', pathMatch: 'full'},
                            {path: 'appComponent', component: AppComponent },
                            {path: 'ordenes', component: OrdenesComponent }

                      ];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
