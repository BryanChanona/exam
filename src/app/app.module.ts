import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table'; // Importa MatTableModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { FavoritePokemonsComponent } from './components/favorite-pokemons/favorite-pokemons.component';
import { PokemonNameTransformPipe } from './pipes/pokemon-name-transform.pipe'; // Asegúrate de importar esto

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    FavoritePokemonsComponent,
    PokemonNameTransformPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,MatTableModule,MatIconModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
