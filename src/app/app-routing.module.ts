import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentSongComponent } from './components/current-song/current-song.component';

const routes: Routes = [
  {path:'current', component: CurrentSongComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
