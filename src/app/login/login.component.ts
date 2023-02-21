import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Database, set, ref, update } from '@angular/fire/database';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'angular-fire';

  constructor(public auth: Auth, public database: Database) {

  }

  // registerUser(value: any) {
  //   createUserWithEmailAndPassword(this.auth, value.email, value.password)
  //     .then((userCredential) => {
  //       // Signed in 
  //       const user = userCredential.user;

  //       set(ref(this.database, 'users/' + user.uid), {
  //         username: value.username,
  //         email: value.email
  //       });

  //       alert('user created! ');
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;

  //       alert(errorMessage);
  //       // ..
  //     });
  // }

  registerUser(value: any) {

    signInWithEmailAndPassword(this.auth, value.email, value.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        const date = new Date();
        update(ref(this.database, 'users/' + user.uid), {

          last_login: date
        });

        alert('user logged in!');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage)
      });
  }
}