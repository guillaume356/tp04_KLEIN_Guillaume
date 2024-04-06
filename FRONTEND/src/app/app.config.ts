import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { provideRouter } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { routes } from './app.routes';
import { ArticleState } from './article/articles.state';
import { CartState } from './cart/cart.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      NgxsModule.forRoot([ArticleState,CartState]),
      HttpClientModule
    ),
  ],
};
