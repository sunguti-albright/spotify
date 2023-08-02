import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CurrentSongComponent } from './components/current-song/current-song.component';
import { environment } from 'src/environments/environment';
import { SupabaseClient, createClient } from '@supabase/supabase-js';

@NgModule({
  declarations: [
    AppComponent,
    CurrentSongComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide : SupabaseClient, useValue : createClient(environment.superbaseUrl, environment.superbaseKey)
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  supabase: any; 

  constructor(){
     // Initialize Supabase Client
     const supabaseUrl = environment.superbaseUrl;
     const supabaseKey = environment.superbaseKey;
      this.supabase = createClient(environment.superbaseUrl, environment.superbaseKey);
  }
}
