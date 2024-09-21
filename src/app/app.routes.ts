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
import { AvvisiComponent } from './componenti/avvisi/avvisi.component';
import { CorsiComponent } from './componenti/corsi/corsi.component';
import { PrenotatiComponent } from './componenti/prenotati/prenotati.component';
import { RisultatiComponent } from './componenti/risultati/risultati.component';

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
          {path: 'lezioni', component: LezioniComponent},
          {path: 'avvisi', component: AvvisiComponent},
          {path: 'corsi', component: CorsiComponent},
          {path: 'prenotati', component: PrenotatiComponent},
          {path: 'risultati', component: RisultatiComponent}
        ]}
];
