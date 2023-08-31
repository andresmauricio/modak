import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { ArtWorkFacade } from 'src/app/facedes /ArtWorksFacede';
import * as artworkActions from './artworks.actions';
import { ArtworksService } from 'src/app/modules/home/services /artworks.service';

@Injectable()
export class ArtWorksEffects {
  loadArtWorks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(artworkActions.getArtWorks),
      exhaustMap(() =>
        this.artworksService.getArtWorks().pipe(
          map((response) => this.artWorkFacade.setArtWorks(response) as any),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private artWorkFacade: ArtWorkFacade,
    private artworksService: ArtworksService
  ) {}
}
