import { Routes } from '@angular/router';
import { FinancialProductsCrudComponent } from './pages/financial-products-crud/financial-products-crud.component';
import { FinancialProductsRegisterComponent } from './pages/financial-products-register/financial-products-register.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/crud', // Redirige a la ruta '/crud'
    pathMatch: 'full',
  },
  {
    path: 'crud',
    component: FinancialProductsCrudComponent,
  },
  {
    path: 'register',
    component: FinancialProductsRegisterComponent,
  },
];
