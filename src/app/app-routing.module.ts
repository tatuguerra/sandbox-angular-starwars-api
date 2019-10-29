import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsNavComponent } from "./films-nav/films-nav.component";
import { FilmDetailComponent } from "./film-detail/film-detail.component";
import { CharactersComponent } from "./characters/characters.component";

const routes: Routes = [
  { path: '', redirectTo: '/films', pathMatch: 'full' },
  { path: 'films', component: FilmsNavComponent },
  { path: 'films/:id', component: FilmDetailComponent },
  { path: 'characters', component: CharactersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
