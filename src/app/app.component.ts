import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
  ],

   templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Multi-Design';
  tiles: Tile[] = [
    {
      text: `<p>Designo Central Office<br/>
             3886 Wellington Street<br/>
             Toronto, Ontario M9C 3J5</p>`,
      cols: 1,
      rows: 2,
      color: '#1D1C1E',
    },
    {
      text: `<p>Contact Us (Central Office)<br/>
             P : +1 253-863-8967<br/>
             M : contact@designo.co</p>`,
      cols: 1,
      rows: 2,
      color: '#1D1C1E',
    },
    {
      text: '',
      cols: 1,
      rows: 2,
      color: '#1D1C1E',
    },

    {
      text: `<div>
                 <img src="../assets/home/desktop/fb.jpg" class="img" alt="facebook image">
                 <img src="../assets/home/desktop/twitter.jpg"  class="img" alt="twitter image">
                 <img src="../assets/home/desktop/pin.jpg"  class="img"alt="pinterest image">
                 <img src="../assets/home/desktop/ln.jpg"  class="img" alt="linkedin image">
             </div>`,
      cols: 1,
      rows: 2,
      color: '#1D1C1E',
    },
  ];
}
