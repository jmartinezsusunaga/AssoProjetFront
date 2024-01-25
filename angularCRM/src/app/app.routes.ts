import { Routes } from '@angular/router';
import { GestionUtilisateurComponent } from './utilisateur/gestion-utilisateur/gestion-utilisateur.component';
import { AppComponent } from './app.component';
import { GestionEvenementComponent } from './evenement/gestion-evenement/gestion-evenement.component';

export const APP_ROUTES: Routes = [
    {path: 'gestionUtilisateur', component: GestionUtilisateurComponent},
    {path: 'gestionEvenements', component: GestionEvenementComponent}

];

export const ADMIN_ROUTES: Routes = [
  {path: 'tableauxDinformation', component: AppComponent},
  {path: '', component: AppComponent}    
]; 
