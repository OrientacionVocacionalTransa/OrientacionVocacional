import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { PagoComponent } from './pago/pago.component'; // Importa el componente de pago

export const routes: Routes = [
  { path: '', component: PrincipalComponent }, // Página principal
  { path: 'pago', component: PagoComponent }, // Ruta de pago
  { path: '', redirectTo: '' } // Redirección por defecto
];