import { createAction, props } from '@ngrx/store';
import { ArtWorkResponse } from 'src/app/modules/home/@types';

const setArtWorks = createAction(
  '[ArtWorks] Set Art',
  props<{ payload: ArtWorkResponse }>()
);

const getArtWorks = createAction('[ArtWorks] Get Art');

export { setArtWorks, getArtWorks };
