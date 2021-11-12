import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressbookAddentriesComponent } from './components/addressbook-addentries/addressbook-addentries.component';
import { AddressbookDetaliComponent } from './components/addressbook-detali/addressbook-detali.component';

const routes: Routes = [
  { path: '', redirectTo: '/addaddress', pathMatch: 'full' },
  { path: 'addaddress', component: AddressbookDetaliComponent },
  { path: 'home', component: AddressbookAddentriesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComp = [
  AddressbookAddentriesComponent,
  AddressbookDetaliComponent
]