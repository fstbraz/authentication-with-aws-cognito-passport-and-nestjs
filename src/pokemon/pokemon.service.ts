import { Injectable } from '@nestjs/common';
import { Pokemon } from './pokemon.interface';

@Injectable()
export class PokemonService {
  listAllPokemons(): Array<Pokemon> {
    return [
      { name: 'Pikachu', type: 'Electric' },
      { name: 'Volpix', type: 'Fire' },
      { name: 'Flabébé', type: 'Fairy' },
    ];
  }
}
