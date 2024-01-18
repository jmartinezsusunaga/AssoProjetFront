import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { HEROES } from './mock.liste.utilisateurs';
import {NgFor} from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'crm-tableaux',
  standalone: true,
  imports: [
    TableModule,
    NgFor,
    ButtonModule,
    DialogModule,
    CommonModule
  ],
    
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

  showModal(event : any, formStatus : string){
    this.displayModal = true;
    console.log("-------------------------------------- modal----------------------------");
    console.log(this.displayModal);
  }

}

interface Column {
  field: string;
  header: string;
}