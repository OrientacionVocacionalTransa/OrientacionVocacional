import { Routes } from '@angular/router';
import { ParteArribaComponent } from './parte-arriba/parte-arriba.component';
import { PrincipalComponent } from './principal/principal.component';

export const routes: Routes = [
  { path: 'parte-arriba', component: ParteArribaComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: '', redirectTo: '/principal', pathMatch: 'full' } // Redirige a 'principal' por defecto
];
