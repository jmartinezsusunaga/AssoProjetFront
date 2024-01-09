import { Component } from '@angular/core';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component';
import { ListeUtilisateursComponent } from './liste-utilisateurs/liste-utilisateurs.component';

@Component({
  selector: 'crm-utilisateur',
  standalone: true,
  imports: [GestionUtilisateurComponent, ListeUtilisateursComponent],
  templateUrl: './utilisateur.component.html',
  styleUrl: './utilisateur.component.scss'
})
export class UtilisateurComponent {

}
