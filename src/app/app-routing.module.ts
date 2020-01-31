import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const APP_ROUTES: Routes = [{path: '', redirectTo: '/appComponent', pathMatch: 'full'},
                        {path: 'appComponent', component: AppComponent }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
