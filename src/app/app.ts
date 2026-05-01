import { Component } from '@angular/core';
import { ListeFilmsComponent } from './liste-films/liste-films';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListeFilmsComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'FILM_LIST';

}
