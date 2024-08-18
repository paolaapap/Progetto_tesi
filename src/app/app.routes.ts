import { Routes } from '@angular/router';
import { LoginComponent } from './componenti/login/login.component';
import { RegistrazioneComponent } from './componenti/registrazione/registrazione.component';
import { HomeComponent } from './componenti/home/home.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'registrazione', component: RegistrazioneComponent},
    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent}
];
