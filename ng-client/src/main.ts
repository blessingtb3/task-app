//ts file that gets compiled to js and is the entry point for the application

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/components/header/header.component';

// Bootstrap the application by passing in the root component and the app config
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

//Bootstrapping our application and adding our header to it
bootstrapApplication(HeaderComponent);
