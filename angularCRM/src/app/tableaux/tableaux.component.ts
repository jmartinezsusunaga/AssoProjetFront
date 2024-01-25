import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { HEROES } from './mock.liste.utilisateurs';
import {NgFor} from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { UtilisateurComponent } from '../utilisateur/utilisateur.component';
import { GestionUtilisateurComponent } from '../utilisateur/gestion-utilisateur/gestion-utilisateur.component';



@Component({
  selector: 'crm-tableaux',
  standalone: true,
  imports: [
    TableModule,
    NgFor,
    ButtonModule,
    DialogModule,
    GestionUtilisateurComponent,
    UtilisateurComponent,
    
  ],
  animations:[],    
  providers:[],
  templateUrl: './tableaux.component.html',
  styleUrl: './tableaux.component.scss'
})

export class TableauxComponent {

  cols!: Column[];
  utilisateurs = HEROES;
  displayModal: boolean= false;
  typeOfView:string = "";



  ngOnInit() {
   

    this.cols = [
      { field: 'prenom', header: 'prenom' },
      { field: 'dateNaissance', header: 'dateNaissance' },
      { field: 'ville', header: 'ville' },
      { field: 'droitUtilisateur', header: 'droitUtilisateur' },
      { field: 'TypePostAsso', header: 'TypePostAsso' }
    ];
  }

  openNewTab(event : any, typeOfView: string ,typeOfWindow: string){
    this.typeOfView = typeOfView;
    if(typeOfWindow == 'UTI'){

      window.open('/gestionUtilisateur');
    }if(typeOfWindow == 'EVENT'){
      window.open('/gestionEvenements');
    }
    /**
     * TODO :  
     * stream de valeur qui vont aller sur les autres composants
     * UTILISATEUR
     * 1. Type de formulaire 
     * 2. type de view
     * 
     * EVENEMENTS 
     * 1. type de formulaire 
     * 2. type de view
     */
  }

  openModal(event : any,typeOfWindow: string){
   /**
    * TODO : 
    * / afficher modal avec les info et un bouton pour modif */
  }

}

interface Column {
  field: string;
  header: string;
}


//TODO:
/**
 *     <crm-utilisateur></crm-utilisateur>
    <ng-tamplate pTemplate="footer">
        <p-button label="cancel"></p-button>
        <p-button label="Ajouter  / modifier"></p-button>
    </ng-tamplate> 

    this.displayModal = true;
    console.log("-------------------------------------- modal----------------------------");
    console.log(this.displayModal);
*/