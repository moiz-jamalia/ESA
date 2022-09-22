import { Injectable, NgZone } from '@angular/core';
import { User } from '../services/user';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import {user} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  )
  {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  signIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.setUserData(result.user);
        // eslint-disable-next-line @typescript-eslint/no-shadow
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['dashboard']);
          }
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  signUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.sendVerificationMail();
        this.setUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  sendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }

  forgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  getIsLoggedIn(): boolean {
    // eslint-disable-next-line @typescript-eslint/no-shadow,@typescript-eslint/no-non-null-assertion
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false;
  }
  // Sign in with Google
  googleAuth() {
    return this.authLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['dashboard']);
    });
  }

  authLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['dashboard']);
        this.setUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  setUserData(_user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${_user.uid}`
    );
    const userData: User = {
      // eslint-disable-next-line no-underscore-dangle
      uid: _user._user,
      email: _user.email,
      displayName: _user.displayName,
      photoURL: _user.photoURL,
      emailVerified: _user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }
}
