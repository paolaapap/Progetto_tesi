import { Routes } from '@angular/router';
import { LoginComponent } from './componenti/login/login.component';
import { RegistrazioneComponent } from './componenti/registrazione/registrazione.component';
import { HomeComponent } from './componenti/home/home.component';
import { HomeContentComponent } from './componenti/home-content/home-content.component';
import { NuovoAvvisoComponent } from './componenti/nuovo-avviso/nuovo-avviso.component';
import { NuovoMaterialeComponent } from './componenti/nuovo-materiale/nuovo-materiale.component';
import { NuovoAppelloComponent } from './componenti/nuovo-appello/nuovo-appello.component';
import { NuovoCorsoComponent } from './componenti/nuovo-corso/nuovo-corso.component';
import { LezioniComponent } from './componenti/lezioni/lezioni.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'registrazione', component: RegistrazioneComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full' },
    {path: 'home', component: HomeComponent,
        children: [
          {path: '', component: HomeContentComponent},
          {path: 'nuovoavviso', component: NuovoAvvisoComponent},
          {path: 'nuovomateriale', component: NuovoMaterialeComponent},
          {path: 'nuovoappello', component: NuovoAppelloComponent},
          {path: 'nuovocorso', component: NuovoCorsoComponent},
          {path: 'lezioni', component: LezioniComponent}
        ]}
];
