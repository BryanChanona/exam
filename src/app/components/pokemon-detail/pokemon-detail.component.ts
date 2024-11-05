import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { IPokemon} from '../../interface/Ipokemon.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemonDetail!: IPokemon; // Cambia a la interfaz adecuada que estés usando

  constructor(private route: ActivatedRoute, private service: PokemonService) {}

  ngOnInit(): void {
    const pokemonName = this.route.snapshot.paramMap.get('name'); // Obtiene el nombre del Pokémon de la URL
    if (pokemonName) {
      this.loadPokemonDetails(pokemonName);
    }
  }

  loadPokemonDetails(name: string): void {
    this.service.getPokemonDetails(name).subscribe({
      next: (response) => {
        this.pokemonDetail = response; // Asigna la respuesta a pokemonDetail
      },
      error: (err) => {
        console.error('Error al cargar los detalles del Pokémon:', err);
      }
    });
  }
}
