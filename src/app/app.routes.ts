import { Routes } from '@angular/router';
import { PagoComponent } from './pago/pago.component'; // Importa el componente de pago

export const routes: Routes = [
  { path: '', component: PagoComponent }, // Página principal ahora es "Pago"
  { path: '**', redirectTo: '' } // Redirección por defecto a "Pago" en caso de rutas no encontradas
];
