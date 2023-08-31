import { createReducer, on } from '@ngrx/store';
import { ArtWorkResponse } from 'src/app/modules/home/@types';
import * as uiArtWorks from './artworks.actions';

export interface ArtWorksState {
  artworks: ArtWorkResponse | null;
}

export const initialState: Partial<ArtWorksState> = {
  artworks: null,
};

export const artWorksReducer = createReducer(
  initialState,
  on(uiArtWorks.setArtWorks, (state, { payload }) => ({
    ...state,
    artworks: payload,
  })),
  on(uiArtWorks.getArtWorks, (state) => ({
    ...state,
    artworks: null,
  }))
);
