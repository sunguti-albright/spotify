import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseClient, User, createClient } from '@supabase/supabase-js';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private client: SupabaseClient;
  private _currentUser: BehaviorSubject<boolean | User | any> =
    new BehaviorSubject(null);

  constructor(private router : Router) {
    this.client = createClient(
      environment.superbaseUrl,
      environment.superbaseKey
    );

    const user = await this.client.auth.getUser();
    console.log('user :', user);

    if (user) {
      this._currentUser.next(user);
    } else {
      this._currentUser.next(false);
    }

    this.client.auth.onAuthStateChange((event, session) => {
      console.log('event', event);
      console.log('session', session);

      if (event === 'SIGNED_IN') {
        console.log('signed in event');
        this._currentUser.next(session?.user)
      } else {
        this._currentUser.next(false);
        this.router.navigateByUrl("/", {replaceUrl: true})
      }
    });
  }

  //supabase email sign in
  signInWithEmail(email: string) {
    return this.client.auth.signInWithOtp({
      email,
    });
  }

  //logout
  logoutUser() {
    this.client.auth.signOut();
  }
  
//method to export current user from private constructor
  get currentUser(){
    return this._currentUser.asObservable();
  }
}
