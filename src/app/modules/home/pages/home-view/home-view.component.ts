import { Component, OnInit } from '@angular/core';
import { ArtworksService } from '../../services /artworks.service';
import { ArtWorkResponse } from '../../@types';
import { ArtWorkFacade } from 'src/app/facedes /ArtWorksFacede';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
})
export class HomeViewComponent implements OnInit {
  constructor(public artWorkFacade: ArtWorkFacade) {}

  ngOnInit(): void {
    this.artWorkFacade.getArtWorks();
  }
}
