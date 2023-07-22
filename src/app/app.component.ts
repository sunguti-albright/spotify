import { Component, OnInit } from '@angular/core';
import { SongsModel } from 'src/models/songs.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.setSongs;
    this.activeNav === 1;
  }
  title = 'spotify';
  likedSongs: any = [];
  activeNav : number = 1;

  setSongs($event: any) {
    this.likedSongs = $event;
  }

  changeActiveCard(index: number) {
    this.activeNav = index;
    if (index === 1) {
     this.setSongs;
    }
    
  }

}
