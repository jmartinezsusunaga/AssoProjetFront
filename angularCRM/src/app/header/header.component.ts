import { Component } from '@angular/core';
import { ListeUtilisateursComponent } from '../utilisateur/liste-utilisateurs/liste-utilisateurs.component';
import { ListeEvenementsComponent } from '../evenement/liste-evenements/liste-evenements.component';
import { ToolbarModule } from 'primeng/toolbar';
import {TabViewModule} from 'primeng/tabview';

@Component({
  selector: 'crm-header',
  standalone: true,
  imports: [ListeUtilisateursComponent, ListeEvenementsComponent, ToolbarModule,TabViewModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
