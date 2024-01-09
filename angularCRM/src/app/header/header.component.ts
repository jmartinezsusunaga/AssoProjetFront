import { Component } from '@angular/core';
import { UtilisateurComponent } from '../utilisateur/utilisateur.component';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'crm-header',
  standalone: true,
  imports: [UtilisateurComponent, ToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
