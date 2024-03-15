import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { CampingsComponent } from './components/campings/campings.component';
import { CampingsFormularioComponent } from './components/campings/campings-formulario/campings-formulario.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'configuracion', component: ConfiguracionComponent},
    {path:'campings', component: CampingsComponent},
    {path:'campings/nuevo', component: CampingsFormularioComponent},
    {path:'campings/:id', component: CampingsFormularioComponent},
    {path:'**', pathMatch:'full', redirectTo: 'home'}
];
