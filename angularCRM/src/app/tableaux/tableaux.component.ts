import { Component, ViewContainerRef } from '@angular/core';
import { TableModule } from 'primeng/table';
import { HEROES } from './mock.liste.utilisateurs';
import {NgFor} from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import {CommonModule} from '@angular/common';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { UtilisateurComponent } from '../utilisateur/utilisateur.component';


@Component({
  selector: 'crm-tableaux',
  standalone: true,
  imports: [
    TableModule,
    NgFor,
    ButtonModule,
    DialogModule,
    CommonModule,
    UtilisateurComponent,
    CommonModule
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



  ngOnInit() {
   

    this.cols = [
      { field: 'prenom', header: 'prenom' },
      { field: 'dateNaissance', header: 'dateNaissance' },
      { field: 'ville', header: 'ville' },
      { field: 'droitUtilisateur', header: 'droitUtilisateur' },
      { field: 'TypePostAsso', header: 'TypePostAsso' }
    ];
  }

  showDialog(){
    this.displayModal = true;
    console.log("-------------------------------------- modal----------------------------");
    console.log(this.displayModal);
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
*/