export interface IPokemon {
    name: string;
    url: string;
    height: number;
    weight: number;
    base_experience: number;
    sprites: {
        front_default: string;
        front_shiny: string;
        back_default: string;
        back_shiny: string;
        [key: string]: string;  // Permite propiedades adicionales de sprites
    };
    abilities?: Ability[];   // Asegúrate de que abilities esté en plural
    isFavorite?: boolean;
    videogames?: string[];    // Lista de videojuegos donde aparece el Pokémon
}

export interface Ability {
    ability: {
        name: string;
        url: string;
    };
}
