import { Routes } from '@angular/router';
import { GestionUtilisateurComponent } from './utilisateur/gestion-utilisateur/gestion-utilisateur.component';
import { ListeUtilisateursComponent } from './utilisateur/liste-utilisateurs/liste-utilisateurs.component';
import { AppComponent } from './app.component';

export const APP_ROUTES: Routes = [
    {path: '', component: AppComponent}
    /*,
    {path: 'home', component: AppComponent},
    {path: 'gestionUtilisateur', component: GestionUtilisateurComponent},
    {path: 'listeUtilisateur', component: ListeUtilisateursComponent}*/

];

/*// In admin/routes.ts:
export const ADMIN_ROUTES: Route[] = [
  {path: 'home', component: AdminHomeComponent},
  {path: 'users', component: AdminUsersComponent},
  // ...
]; */
