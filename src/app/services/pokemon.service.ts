import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';
  private favorites: any[] = []; // Arreglo para almacenar los favoritos

  constructor(private http: HttpClient) {}

  getPokemonList(limit: number = 20, offset: number = 0): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon?limit=${limit}&offset=${offset}`);
  }

  getPokemonDetails(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon/${name}`);
  }

  // Método para obtener los Pokémon favoritos
  getFavorites(): any[] {
    return this.favorites;
  }

  // Método para agregar o quitar Pokémon de favoritos
  toggleFavorite(pokemon: any): void {
    const index = this.favorites.indexOf(pokemon);
    if (index > -1) {
      // Si ya es favorito, quitarlo
      this.favorites.splice(index, 1);
    } else {
      // Si no es favorito, agregarlo
      this.favorites.push(pokemon);
    }
  }

  // Método para verificar si un Pokémon es favorito
  isFavorite(pokemon: any): boolean {
    return this.favorites.includes(pokemon);
  }
}
