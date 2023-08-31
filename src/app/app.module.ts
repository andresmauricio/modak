import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/user/user.reduce';
import { uiReducer } from './state/ui/ui.reduce';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthInterceptor } from './modules/shared/token-interceptor.service';
import { LoadingInterceptor } from './modules/shared/loading-interceptor.service';
import { SharedModule } from './modules/shared/shared.module';
import { artWorksReducer } from './state/artworks/artworks.reduce';
import { EffectsModule } from '@ngrx/effects';
import { ArtWorksEffects } from './state/artworks/artworks.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forRoot(
      {
        user: userReducer,
        ui: uiReducer,
        artworks: artWorksReducer,
      },
      {}
    ),
    StoreDevtoolsModule.instrument({ maxAge: 40 }),
    EffectsModule.forRoot(ArtWorksEffects),
  ],
  providers: [
    AuthInterceptor,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
