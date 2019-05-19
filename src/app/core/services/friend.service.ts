import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Friend} from '../../shared/models/friend';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FriendService {

    friends: Observable<Friend[]>;

    constructor(
        public afstore: AngularFirestore,
        public router: Router
    ) {
        this.friends = this.afstore.collection('friends').snapshotChanges().pipe(
            map(changes => changes.map(a => {
                const data = a.payload.doc.data() as Friend;
                const id = a.payload.doc.id;
                return {id, ...data};
            }))
        );
    }

    getFriends() {
        return this.friends;
    }

    addFriend(friend: Friend) {
        this.afstore.collection(`friends`).add(friend)
            .then(() => {
                window.alert('New Friend added !');
            }).catch((error) => {
            window.alert(error.message);
        });
    }

    deleteFriend(friend: Friend) {
        this.afstore.doc(`friends/${friend.id}`).delete()
            .then(() => {
                window.alert('1 Friend data deleted !');
            }).catch((error) => {
            window.alert(error.message);
        });
    }
}
