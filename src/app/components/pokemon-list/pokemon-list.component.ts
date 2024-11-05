import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { IPokemon } from '../../interface/Ipokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'url', 'favorite'];

  pokemonArray: IPokemon[] = [];

  constructor(private service: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.service.getPokemonList(20, 0).subscribe({
      next: (response) => {
        console.log(response)
        this.pokemonArray = response.results.map((pokemon: any) => ({
          name: pokemon.name,
          url: pokemon.url,
        }));
      },
      error: (err) => {
        console.error('Error al cargar los Pokémon:', err);
      }
    });
  }

  navigateToDetails(pokemonName: string): void {
    this.router.navigate(['/pokemon', pokemonName]); // Navega a la ruta de detalles del Pokémon
  }
  toggleFavorite(pokemon: IPokemon): void {
    this.service.toggleFavorite(pokemon); // Usar el método del servicio
  }

  isFavorite(pokemon: IPokemon): boolean {
    return this.service.isFavorite(pokemon); // Usar el método del servicio
}
}