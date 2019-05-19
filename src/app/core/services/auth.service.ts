import {Injectable, NgZone} from '@angular/core';
import {User} from '../../shared/models/user';
import {auth} from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    userData: any;

    constructor(
        public afstore: AngularFirestore,
        public afAuth: AngularFireAuth,
        public router: Router,
        public ngZone: NgZone
    ) {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user'));
            } else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }

    signIn(email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then((result) => {
                this.setUserData(result.user);
                if (result.user.emailVerified) {
                    this.ngZone.run(() => {
                        this.router.navigate(['dashboard']);
                        window.alert('Welcome' + this.userData.displayName);
                    });
                } else {
                    window.alert('You are not verified ! Please check your email then follow the instructions.');
                }
            }).catch((error) => {
                window.alert(error.message);
            });
    }


    signUp(email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
                this.setUserData(result.user);
                this.sendVerification();
            }).catch((error) => {
                window.alert(error.message);
            });
    }

    sendVerification() {
        this.afAuth.auth.onAuthStateChanged(user => {
            user.sendEmailVerification().then(() => {
                this.router.navigate(['verify']);
                window.alert('Verification link sent !');
            }).catch((error) => {
                window.alert(error.message);
            });
        });
    }

    forgotPassword(passwordResetEmail) {
        return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
            .then(() => {
                window.alert('Password Reset link has been sent! Please check your Email');
                this.router.navigate(['login']);
            }).catch((error) => {
                window.alert(error.message);
            });
    }

    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user !== null && user.emailVerified !== false);
    }

    googleAuth() {
        return this.authLogin(new auth.GoogleAuthProvider());
    }

    authLogin(provider) {
        return this.afAuth.auth.signInWithPopup(provider)
            .then((result) => {
                this.ngZone.run(() => {
                    this.router.navigate(['dashboard']);
                });
                this.setUserData(result.user);
            }).catch((error) => {
                window.alert(error.message);
            });
    }

    setUserData(user) {
        const userRef: AngularFirestoreDocument<any> = this.afstore.doc('users/${user.uid}');
        const userData: User = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        };
        return userRef.set(userData, {
            merge: true
        });
    }

    signOut() {
        return this.afAuth.auth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['login']);
        });
    }
}
