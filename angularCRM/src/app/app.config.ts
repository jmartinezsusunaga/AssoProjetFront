import { ApplicationConfig} from '@angular/core';
import { provideRouter } from '@angular/router';

import { APP_ROUTES, ADMIN_ROUTES } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES),
    provideRouter(ADMIN_ROUTES), 
    provideClientHydration()]
};
