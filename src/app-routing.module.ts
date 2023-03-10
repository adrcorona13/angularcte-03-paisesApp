import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './app/pais/pages/por-pais/por-pais.component';
import { PorContinenteComponent } from './app/pais/pages/por-continente/por-continente.component';
import { PorCapitalComponent } from './app/pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './app/pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorContinenteComponent,
    },
    {
        path: 'capital',
        component: PorCapitalComponent,
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent,
    },
    {
        path: '**',
        redirectTo: ''
    }
]


@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}