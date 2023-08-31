import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select('user').pipe(
    map((state) => {
      if (state?.token) return true;
      router.navigate(['/']);
      return false;
    })
  );
};
