import { Component,ViewChild  } from '@angular/core';
import { ListeUtilisateursComponent } from '../utilisateur/liste-utilisateurs/liste-utilisateurs.component';
import { ListeEvenementsComponent } from '../evenement/liste-evenements/liste-evenements.component';
import { ToolbarModule } from 'primeng/toolbar';
import {TabViewModule,TabPanel,TabView} from 'primeng/tabview';
import { TableauxComponent } from '../tableaux/tableaux.component';

@Component({
  selector: 'crm-header',
  standalone: true,
  imports: [ListeUtilisateursComponent, 
            ListeEvenementsComponent, 
            ToolbarModule,
            TabViewModule,
            TableauxComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  index: number = 0;
@ViewChild('onglets') tabView : TabViewModule;

  constructor( tabView: TabViewModule) { 
    this.tabView = tabView;
  }

  tabViewChange(event : any,tabView: TabViewModule) {
    this.index = event.index;
    

   }

  
   
}
