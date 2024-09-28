import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { EjecutarComponent } from './modules/ejecutar/ejecutar.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "ejecutar", component: EjecutarComponent }
];
