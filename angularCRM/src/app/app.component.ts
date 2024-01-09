import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import { HeaderComponent } from './header/header.component';



@Component({
  selector: 'crm-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularCRM';

  
}


/* Doc StandAlone angular 17
https://angular.dev/reference/migrations/standalone#switch-to-standalone-bootstrapping-api
 */