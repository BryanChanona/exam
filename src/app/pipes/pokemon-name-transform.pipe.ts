import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonNameTransform'
})
export class PokemonNameTransformPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value; // Manejar caso de valores nulos o indefinidos

    // Reemplazar 'a' y 'o' por 'x' y convertir a mayúsculas
    return value.replace(/[ao]/g, 'x').toUpperCase();
  }
}
