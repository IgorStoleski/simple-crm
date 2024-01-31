import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { firebaseConfig } from '../environments/environment';
import { FirebaseAppModule, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { FirestoreModule, getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideAnimations(),
    MatDatepickerModule,
    MatNativeDateModule,
    FirestoreModule,
    FirebaseAppModule,
    importProvidersFrom([provideFirebaseApp(() => initializeApp(firebaseConfig))]),
    importProvidersFrom([provideFirestore(() => getFirestore())])
  ]
};

