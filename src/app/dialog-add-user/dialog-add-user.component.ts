import { CommonModule } from '@angular/common';
import { Component, NgModule, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { FormsModule, NgModel } from '@angular/forms';
import { Firestore, collection, doc, addDoc, getDocs } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { FirestoreModule, collectionData } from '@angular/fire/firestore';
import { FirebaseAppModule } from '@angular/fire/app';
import { FirestoreService } from '../services/firestore.service';



@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter(), NgModule, NgModel ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatDatepickerModule,
    FormsModule,
    FirestoreModule,
    FirebaseAppModule,
    MatNativeDateModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})

export class DialogAddUserComponent {
  
  /* items$;
  items; */
  /* public firestore: Firestore = inject(Firestore); */
  constructor(public firestore: FirestoreService) {
   /*  this.items$ = collectionData(this.getUserRef());
    this.items = this.items$.subscribe( (list) => {
      
    })
    this.items.unsubscribe(); */

  }
  

  user = new User();
  birthDate!: Date;

  saveUser() {
    
    console.log(this.user);
    /* addDoc(collection(this.firestore, 'users'), this.user); */
    
  }
/* 
  async addUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user); */
    /* const docRef = await addDoc(this.getUserRef(), this.user) *//* 
    addDoc(collection(this.firestore, 'users'), this.user).catch(
      (err) => { console.error(err);}
      ).then(
        (docRef) => {console.log("Document written with ID: ", docRef?.id);}
      );
  } */


/* 
  getUserRef() {
    return collection(this.firestore, 'users');
  }
  
  getDocRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }
 */
}

