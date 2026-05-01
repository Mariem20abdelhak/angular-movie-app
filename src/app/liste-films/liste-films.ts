import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-films',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-films.html',
  styleUrl: './liste-films.css'
})
export class ListeFilmsComponent {

  tabFilms = [
  {
    nomFilm: 'Mission Impossible 2',
    imageFilm: 'films/mi2.jpg', // Use forward slashes /
    disponible: true,
    nbJaime: 0,
    nbJeNaimeps: 0
  },
  {
    nomFilm: 'MI6',
    imageFilm: 'films/mi6.jpg',
    disponible: true,
    nbJaime: 0,
    nbJeNaimeps: 0
  },{
    nomFilm: 'Fallout',
    imageFilm: 'films/miFallout.jpg',
    disponible: true,
    nbJaime: 0,
    nbJeNaimeps: 0
  },{
    nomFilm: 'Fantome',
    imageFilm: 'films/miFantome.jpg',
    disponible: true,
    nbJaime: 0,
    nbJeNaimeps: 0
  }
];

  onJaime(i: number) {
    this.tabFilms[i].nbJaime++;
    console.log('J\'aime ce film ' + this.tabFilms[i].nbJaime);
  }

  onJaimePas(i: number) {
    this.tabFilms[i].nbJeNaimeps++;
    console.log('J\'aime pas ce film ' + this.tabFilms[i].nbJeNaimeps);
  }

  getColor(x: number, y: number): string {
    if (x > y) return "#1c8454";
    else if (x === y) return "#ffffff";
    else return "#dc3444";
  }
}
