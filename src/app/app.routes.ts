import { Routes } from '@angular/router';
import { PagoComponent } from './pago/pago.component'; // Importa el componente de pago
import { PlanesComponent } from './planes/planes.component';
import { PerfilestudianteComponent } from './perfilestudiante/perfilestudiante.component';

export const routes: Routes = [
  { path: '', component: PagoComponent }, // Página principal ahora es "Pago"
  {path: 'planes', component: PlanesComponent},
  {path: 'perfilestudiante', component: PerfilestudianteComponent},

  { path: '**', redirectTo: '' } // Redirección por defecto a "Pago" en caso de rutas no encontradas
];
