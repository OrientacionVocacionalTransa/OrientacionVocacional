import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';

export const routes: Routes = [
  { path: '', component: PrincipalComponent }, // Página principal
  { path: '**', redirectTo: '' } // Redirección por defecto
];