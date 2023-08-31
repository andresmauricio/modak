import { Store } from '@ngrx/store';
import { AppState } from '../state';
import { Injectable } from '@angular/core';
import { hiddenLoading, showLoading } from '../state/ui/ui.actions';

@Injectable({ providedIn: 'root' })
export class UiFacade {
  isLoading$ = this.store.select((state) => state.ui.isLoading);

  constructor(private store: Store<AppState>) {}

  showLoading() {
    this.store.dispatch(showLoading());
  }

  hiddenLoading() {
    this.store.dispatch(hiddenLoading());
  }
}
