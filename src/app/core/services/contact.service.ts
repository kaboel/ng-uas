import {Injectable} from '@angular/core';
import {Contact} from '../../shared/models/contact';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    contacts: Observable<Contact[]>;

    constructor(
        public afstore: AngularFirestore,
        public router: Router
    ) {
        this.contacts = this.afstore.collection('contacts').snapshotChanges().pipe(
            map(changes => changes.map(a => {
                const data = a.payload.doc.data() as Contact;
                const id = a.payload.doc.id;
                return {id, ...data};
            }))
        );
    }

    getContacts() {
        return this.contacts;
    }

    addContact(contact: Contact) {
        this.afstore.collection(`contacts`).add(contact)
            .then(() => {
                window.alert('Contact Sent !');
            }).catch((error) => {
            window.alert(error.message);
        });
    }

    deleteContact(contact: Contact) {
        this.afstore.doc(`contacts/${contact.id}`).delete()
            .then(() => {
                window.alert('Data Deleted !');
            }).catch((error) => {
            window.alert(error.message);
        });
    }
}
