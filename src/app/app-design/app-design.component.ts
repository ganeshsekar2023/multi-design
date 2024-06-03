import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { CommonModule } from '@angular/common';

export interface Card {
  color: string;
  cols: number;
  rows: number;
  text: string;
  header: string;
  image: string;

}


@Component({
  selector: 'app-app-design',
  standalone: true,
  imports: [    MatCardModule, MatGridListModule, CommonModule, FooterComponent
  ], 
   templateUrl: './app-design.component.html',
  styleUrl: './app-design.component.css'
})
export class AppDesignComponent {

  tiles: Card[] = [
    {
      header:'AIRFILTER',
      image: '../../assets/app-design/desktop/Airfilter.jpg',
      text: `<p>Solving the problem of poor indoor air quality by filtering the air</p>`,
      cols: 1,
      rows: 1,
      color: '#FDF3F0',
    },
    {
      header:'EYECAM',
      image: '../../assets/app-design/desktop/Eyecam.jpg',
      text: `<p>Product that lets you edit your favorite photos and videos at any time</p>`,
      cols: 1,
      rows: 1,
      color: '#FDF3F0',
    },
    {
      header:'FACEIT',
      image: '../../assets/app-design/desktop/Feceit.jpg',
      text: `<p>Get to meet your favorite internet superstar with the faceit app</p>`,
      cols: 1,
      rows: 1,
      color: '#FDF3F0',
    },
    {
      header:'TODO',
      image: '../../assets/app-design/desktop/Todo.jpg',
      text: `<p>A todo app that features cloud sync with light and dark mode</p>`,
      cols: 1,
      rows: 1,
      color: '#FDF3F0',
    },
    {
      header:'LOOPSTUDIOS',
      image: '../../assets/app-design/desktop/Loopstudios.jpg',
      text: `<p>A VR experience app made for Loopstudios</p>`,
      cols: 1,
      rows: 1,
      color: '#FDF3F0',
    },
 
  ];



}
