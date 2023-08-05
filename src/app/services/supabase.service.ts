import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
public client : SupabaseClient;
  constructor() { 

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
