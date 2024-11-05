import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { IPokemon } from '../../interface/Ipokemon.model';

@Component({
  selector: 'app-favorite-pokemons',
  templateUrl: './favorite-pokemons.component.html',
  styleUrls: ['./favorite-pokemons.component.scss']
})
export class FavoritePokemonsComponent implements OnInit {
  favorites: IPokemon[] = [];

  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    // Aquí puedes cargar los favoritos desde el servicio o un estado compartido
    // Por simplicidad, lo inicializamos como un array vacío
    this.favorites = this.service.getFavorites(); // Suponiendo que implementas esta lógica
  }
}
