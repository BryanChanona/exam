import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { FavoritePokemonsComponent } from './components/favorite-pokemons/favorite-pokemons.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  { path: '', component: PokemonListComponent },
  { path: 'favorites', component: FavoritePokemonsComponent },
  { path: 'pokemon/:name', component: PokemonDetailComponent }, // Ruta para los detalles del Pokémon
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
