import { Injectable } from '@angular/core';
import { SupabaseClient, User, createClient } from '@supabase/supabase-js';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private client: SupabaseClient;
  private _currentUser : BehaviorSubject<boolean | User | any > = new BehaviorSubject(null);
  
  constructor() {
    this.client = createClient(
      environment.superbaseUrl,
      environment.superbaseKey
    );

    const user = this.client.auth.getUser();
    console.log('user :' , user);
    
if(){

}

    this.client.auth.onAuthStateChange((event, session) => {
      console.log('event', event);
      console.log('session', session);

      if (event === 'SIGNED_IN') {
        console.log('signed in event');
      } else {
      }
    });
  }

//supabase email sign in
  signInWithEmail(email : string){
    return this.client.auth.signInWithOtp({
      email,
    })
  }

//logout
  logoutUser(){
    this.client.auth.signOut()
  }
}
