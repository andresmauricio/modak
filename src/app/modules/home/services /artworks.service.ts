import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ArtWorkResponse } from '../@types';

@Injectable({
  providedIn: 'root',
})
export class ArtworksService {
  private API: string;

  constructor(private http: HttpClient) {
    this.API = environment.artworksApi;
  }

  getArtWorks(): Observable<ArtWorkResponse> {
    return this.http.get<ArtWorkResponse>(this.API).pipe(
      map((response) => {
        const { iiif_url } = response.config;
        response.data.forEach((item) => {
          const url = `${iiif_url}/${item.image_id}/full/843,/0/default.jpg`;
          item.image_preview = url;
        });
        return response;
      })
    );
  }
}
