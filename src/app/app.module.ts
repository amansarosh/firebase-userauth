import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { config } from 'rxjs';

const firebaseConfig = {
  apiKey: "AIzaSyxxxxxxxxxxxxxxxxxxxxxxx3oS9gemdN4", //hidden for obvious reasons
  authDomain: "firebasics1-744a7.firebaseapp.com",
  databaseURL: "https://firebasics1-744a7.firebaseio.com",
  projectId: "firebasics1-744a7",
  storageBucket: "firebasics1-744a7.appspot.com",
  messagingSenderId: "522715585239",
  appId: "1:522715585239:web:15df6c8ac74285fe22ae92",
  measurementId: "G-6T3Z41CGPE"
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }