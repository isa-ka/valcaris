import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { TarifsComponent } from './component/tarifs/tarifs.component';
import { FayardComponent } from './component/fayard/fayard.component';
import { FreneComponent } from './component/frene/frene.component';
import { ContactComponent } from './component/contact/contact.component';


const routes: Routes = [
  {path : '' , component: HomeComponent},
  {path: 'fayard', component: FayardComponent},
  {path: 'frene', component: FreneComponent},
  { path: 'tarifs', component: TarifsComponent },
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
