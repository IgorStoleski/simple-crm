import { User } from './../../models/user.class';
import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  onSnapshot,
  addDoc,
  doc,
  updateDoc,
} from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})

export class FirestoreService {
    firestore = inject(Firestore);
    user = new User();

    birthDate!: Date;

    async addUser() {
        this.user.birthDate = this.birthDate ? this.birthDate.getTime() : 0;
        console.log(this.user); 
        /* const docRef = await addDoc(this.getUserRef(), this.user) */ 
        addDoc(collection(this.firestore, 'users'), this.user.toJson()).catch(
          (err) => { console.error(err);}
          ).then(
            (docRef) => {console.log("Document written with ID: ", docRef?.id);}
          );
      }
}