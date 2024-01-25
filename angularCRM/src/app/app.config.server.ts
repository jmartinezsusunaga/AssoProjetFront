import { mergeApplicationConfig, ApplicationConfig,ViewContainerRef, createComponent, importProvidersFrom } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { BrowserAnimationsModule, NoopAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideAnimations(),
    importProvidersFrom([BrowserModule,BrowserAnimationsModule,NoopAnimationsModule]),
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
