import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
 
import { ConsultaComponent } from './desafio/consulta/consulta.component';
 
import {CadastroComponent} from './desafio/cadastro/cadastro.component';
 
import { HomeComponent } from './home/home.component';
 
const appRoutes: Routes = [
    { path: 'home',                    component: HomeComponent },
    { path: '',                        component: HomeComponent },
    { path: 'consulta-desafio',         component: ConsultaComponent },
    { path: 'cadastro-desafio',         component: CadastroComponent }
 
];
 
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);