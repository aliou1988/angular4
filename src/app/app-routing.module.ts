import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
 import { BasicComponent } from './basic/basic.component';
import { WelcomComponent } from './welcom/welcom.component';
import { TvaComponent } from './tva/tva.component';
import { ConversionComponent } from './conversion/conversion.component';


const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'welcom', component: WelcomComponent },
{ path: '', redirectTo: '/basic', pathMatch: 'full'},
{ path: 'basic', component: BasicComponent },
{ path: 'tva', component: TvaComponent },
{ path: 'conversion', component: ConversionComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
