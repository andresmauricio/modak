import { Store } from '@ngrx/store';
import { AppState } from '../state';
import { Injectable } from '@angular/core';
import { ArtWorkResponse } from '../modules/home/@types';
import * as artworkActions from '../state/artworks/artworks.actions';

@Injectable({ providedIn: 'root' })
export class ArtWorkFacade {
  artworks$ = this.store.select((state) => state.artworks.artworks);

  constructor(private store: Store<AppState>) {}

  getArtWorks() {
    this.store.dispatch(artworkActions.getArtWorks());
  }

  setArtWorks(response: ArtWorkResponse) {
    this.store.dispatch(artworkActions.setArtWorks({ payload: response }));
  }
}
