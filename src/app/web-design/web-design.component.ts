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
  selector: 'app-web-design',
  standalone: true,
  imports: [    MatCardModule, MatGridListModule, CommonModule, FooterComponent
  ],
  templateUrl: './web-design.component.html',
  styleUrl: './web-design.component.css'
})
export class WebDesignComponent {

  tiles: Card[] = [
    {
      header:'EXPRESS',
      image: '../../assets/web-design/desktop/Express.jpg',
      text: `<p>A multi-carrier shipping website for ecommerce businesses</p>`,
      cols: 1,
      rows: 1,
      color: '#FDF3F0',
    },
    {
      header:'TRANSFER',
      image: '../../assets/web-design/desktop/Transfer.jpg',
      text: `<p>Site for low-cost money transfers and sending money within seconds</p>`,
      cols: 1,
      rows: 1,
      color: '#FDF3F0',
    },
    {
      header:'PHOTON',
      image: '../../assets/web-design/desktop/Photon.jpg',
      text: `<p>A state-of-the-art music player with high-resolution audio and DSP effects</p>`,
      cols: 1,
      rows: 1,
      color: '#FDF3F0',
    },
    {
      header:'BUILDER',
      image: '../../assets/web-design/desktop/Builder.jpg',
      text: `<p>Connects users with local contractors based on their location</p>`,
      cols: 1,
      rows: 1,
      color: '#FDF3F0',
    },
    {
      header:'BLOGER',
      image: '../../assets/web-design/desktop/Bloger.jpg',
      text: `<p>Blogr is a platform for creating an online blog or publication</p>`,
      cols: 1,
      rows: 1,
      color: '#FDF3F0',
    },
    {
      header:'CAMP',
      image: '../../assets/web-design/desktop/Camp.jpg',
      text: `<p>Get expert training in coding, data, design, and digital marketing</p>`,
      cols: 1,
      rows: 1,
      color: '#FDF3F0',
    },

  ];


}
