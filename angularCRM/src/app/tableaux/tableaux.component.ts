import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { HEROES } from './mock.liste.utilisateurs';
import {NgFor} from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'crm-tableaux',
  standalone: true,
  imports: [TableModule,NgFor,ButtonModule],
  templateUrl: './tableaux.component.html',
  styleUrl: './tableaux.component.scss'
})
export class TableauxComponent {

  cols!: Column[];
  utilisateurs = HEROES;

  ngOnInit() {
   

    this.cols = [
      { field: 'prenom', header: 'prenom' },
      { field: 'dateNaissance', header: 'dateNaissance' },
      { field: 'ville', header: 'ville' },
      { field: 'droitUtilisateur', header: 'droitUtilisateur' },
      { field: 'TypePostAsso', header: 'TypePostAsso' }
  ];
}

}

interface Column {
  field: string;
  header: string;
}